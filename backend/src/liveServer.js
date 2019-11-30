const { redisSetex, redisGet, redisDel, logRedisError } = require('./redis');
const ONE_HOUR = 3600;

async function handleConnection(socket) {
  try {
    const { username } = socket.handshake.query;
    console.log(`User connected: ${username}`);

    await redisSetex(username, ONE_HOUR, socket.id);

    socket.on('disconnect', handleDisconnect(username, socket));
    socket.on('message', handleMessage(socket));
  }
  catch(err) {
    logRedisError(err);
  }
}

function handleDisconnect(username, socket) {
  return async () => {
    try {
      await redisDel(username);
      console.log(`User ${username} disconnected.`);
    }
    catch(err) {
      logRedisError(err);
    }
  }
}

function handleMessage(socket) {
  return async message => {
    try {
      const receiver = await redisGet(message.to);
      console.log(`New message from ${message.from} for ${receiver}.`)

      // Online
      if(receiver)
        socket.to(receiver).emit('incoming message', message);
      // Offline
      else
        console.log('User is offline. Nothing done.');
    }
    catch(err) {
      console.error(`Handle message error: ${err.message}`);
    }
  }
}

module.exports = {
  generateMiddleware(io) {
    return (req, res, next) => {
      req.io = io;
      return next();
    }
  },

  bindEvents(io) {
    io.on('connection', socket => handleConnection(socket));
  },
}

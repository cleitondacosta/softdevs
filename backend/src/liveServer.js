const { redisSetex, redisGet, redisDel, logRedisError } = require('./redis');
const ONE_HOUR = 3600;

async function handleConnection(socket) {
  try {
    console.log('User connected.');

    const { username } = socket.handshake.query;

    await redisSetex(username, ONE_HOUR, socket.id);

    socket.on('disconnect', handleDisconnect(username, socket));
    socket.on('message', handleMessage(username, socket));
  }
  catch(err) {
    logRedisError(err);
  }
}

function handleDisconnect(username, socket) {
  return async () => {
    try {
      console.log('User disconnected.');
      await redisDel(username);
    }
    catch(err) {
      logRedisError(err);
    }
  }
}

function handleMessage(username, socket) {
  return message => {
    console.log(message);
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

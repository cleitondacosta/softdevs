const { redisSetex, redisGet, redisDel, logRedisError } = require('./redis');
const ONE_HOUR = 3600;

async function handleConnection(socket) {
  try {
    console.log('User connected.');

    const { userId } = socket.handshake.query;

    await redisSetex(userId, ONE_HOUR, socket.id);

    socket.on('disconnect', handleDisconnect(userId, socket));
    socket.on('message', handleMessage(userId, socket));
  }
  catch(err) {
    logRedisError(err);
  }
}

function handleDisconnect(userId, socket) {
  return async () => {
    try {
      console.log('User disconnected.');
      await redisDel(userId);
    }
    catch(err) {
      logRedisError(err);
    }
  }
}

function handleMessage(userId, socket) {
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

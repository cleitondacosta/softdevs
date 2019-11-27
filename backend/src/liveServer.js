const redis = require('redis');

const redisClient = redis.createClient();
const ONE_HOUR = 3600;

redisClient.on('error', err => {
  throw err;
});

function handleConnection(socket) {
  console.log('User connected.');

  const { userId } = socket.handshake.query;

  redisClient.setex(userId, ONE_HOUR, socket.id, (err, reply) => {
    if(err) {
      console.error(`Redis error: ${err.message}`);
    }
  });

  socket.on('disconnect', handleDisconnect(userId, socket));
  socket.on('message', handleMessage(socket));
}

function handleDisconnect(userId, socket) {
  return () => {
    console.log('User disconnected.');

    redisClient.del(userId, (err, reply) => {
      if(err) {
        console.error(`Redis error: ${err.message}`);
      }
    });
  }
}

function handleMessage(socket) {
  return (message) => {
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

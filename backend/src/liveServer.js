function handleConnection(socket) {
  console.log('User connected.');

  socket.on('disconnect', handleDisconnect(socket));
  socket.on('message', handleMessage(socket));
}

function handleDisconnect(socket) {
  return () => {
    console.log('Disconnected.');
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

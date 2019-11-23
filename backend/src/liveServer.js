module.exports = {
  generateMiddleware(io) {
    return (req, res, next) => {
      req.io = io;
      return next();
    }
  },

  // TODO
  bindEvents(io) {
    return io;
  },
}

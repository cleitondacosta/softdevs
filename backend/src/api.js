const express = require('express');
const http = require('http');
const socketIO = require('socket.io');
const cors = require('cors');
const routes = require('./routes');
const liveServer = require('./liveServer');

function init(port) {
  const app = configure();
  app.listen(port, () => console.log(`Api listening on port ${port}.`));
}

function configure() {
  const app = express();
  const httpServer = http.createServer(app);
  const io = socketIO(httpServer);

  app.use(liveServer.generateMiddleware(io));
  app.use(cors());
  app.use(express.json());
  app.use(routes);

  liveServer.bindEvents(io);

  return httpServer;
}

module.exports = { init };

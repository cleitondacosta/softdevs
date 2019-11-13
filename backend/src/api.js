const express = require('express');
const cors = require('cors');
const routes = require('./routes');

function configure() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use(routes);

  return app;
}

function init(port) {
  const app = configure();
  app.listen(port, () => console.log(`Api listening on port ${port}.`));
}

module.exports = { init };

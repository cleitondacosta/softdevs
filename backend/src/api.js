const express = require('express');
const cors = require('cors');
const routes = require('./routes');

function configureApi() {
  const app = express();

  app.use(cors());
  app.use(express.json());

  app.use(routes);

  return app;
}

function init(port) {
  const app = configureApi();
  app.listen(port, () => console.log(`Listening on port 8080.`));
}

module.exports = { init };

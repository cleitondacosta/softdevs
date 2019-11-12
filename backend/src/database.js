const mongoose = require('mongoose');

function connect(dbUrl, onConnect) {
  const dbConfig = {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  };

  console.log("Connecting to database ...");

  mongoose.connect(dbUrl, dbConfig)
    .catch(err => console.error(err));

  const connection = mongoose.connection;

  connection.on('open', () => {
    console.log('Connection established.');
    onConnect();
  });

  connection.on('error', err => { 
    throw err;
  });
}

module.exports = { connect };

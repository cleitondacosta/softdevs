const mongoose = require('mongoose');
const redis = require('redis');

module.exports = {
  connectToMongo(dbUrl, onConnect) {
    const dbConfig = {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useFindAndModify: false,
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
  },
}

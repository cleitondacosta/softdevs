const api = require('./api');
const database = require('./database');

const dbUrl = 'mongodb://localhost:27017/softdevs';

database.connectToMongo(dbUrl, () => api.init(8080));

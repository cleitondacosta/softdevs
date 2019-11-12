const api = require('./api');
const database = require('./database');

const dbUrl = 'mongodb://localhost:27017/softdevs';

database.connect(dbUrl, () => api.init(8080));

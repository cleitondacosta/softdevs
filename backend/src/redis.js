const redis = require('redis');
const { promisify } = require('util');

const redisClient = redis.createClient();
const logRedisError = err => console.error(`Redis error: ${err.message}`);

redisClient.on('error', err => logRedisError(err));

module.exports = {
  redisSetex: promisify(redisClient.setex.bind(redisClient)),
  redisGet: promisify(redisClient.get).bind(redisClient),
  redisDel: promisify(redisClient.del).bind(redisClient),
  logRedisError
}

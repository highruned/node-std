(function() {
  var commands, redis;
  var __bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };
  commands = ['append', 'auth', 'bgsave', 'blpop', 'brpop', 'dbsize', 'decr', 'decrby', 'del', 'exists', 'expire', 'expireat', 'flushall', 'flushdb', 'get', 'getset', 'hdel', 'hexists', 'hget', 'hgetall', 'hincrby', 'hkeys', 'hlen', 'hmget', 'hmset', 'hset', 'hvals', 'incr', 'incrby', 'info', 'keys', 'lastsave', 'len', 'lindex', 'llen', 'lpop', 'lpush', 'lrange', 'lrem', 'lset', 'ltrim', 'mget', 'move', 'mset', 'msetnx', 'psubscribe', 'publish', 'punsubscribe', 'randomkey', 'rename', 'renamenx', 'rpop', 'rpoplpush', 'rpush', 'sadd', 'save', 'scard', 'sdiff', 'sdiffstore', 'select', 'set', 'setex', 'setnx', 'shutdown', 'sinter', 'sinterstore', 'sismember', 'smembers', 'smove', 'sort', 'spop', 'srandmember', 'srem', 'subscribe', 'sunion', 'sunionstore', 'ttl', 'type', 'unsubscribe', 'zadd', 'zcard', 'zcount', 'zincrby', 'zinter', 'zrange', 'zrangebyscore', 'zrank', 'zrem', 'zrembyrank', 'zremrangebyrank', 'zremrangebyscore', 'zrevrange', 'zrevrank', 'zscore', 'zunion'];
  redis = (function() {
    function redis(host, port, options) {
      var connection;
      if (options == null) {
        options = {};
      }
      connection = net.createConnection(port, host);
      this.client = new RedisClient(connection, options);
    }
    redis.prototype.disconnect = function() {};
    redis.prototype.reconnect = function() {};
    redis.prototype.set_service = function(service) {
      this.service = service;
      return this.service.bind('model_change', __bind(function(model, property) {
        console.log('model changed: ' + model.type + ':' + model.id + ':' + property);
        return this.client.set(model.type + ':' + model.id + ':' + property, model[property]);
      }, this));
    };
    redis.prototype.reset = function() {};
    redis.prototype.is_active = function() {};
    redis.prototype.active = true;
    redis.prototype.client = null;
    redis.prototype.service = null;
    redis.prototype.types = {
      varchar: core.string,
      int: core.integer,
      float: core.float,
      decimal: core.float,
      datetime: core.datetime,
      blob: core.string,
      tinyint: core.integer
    };
    return redis;
  })();
  commands.forEach(function(command) {
    return redis.prototype[command] = function() {
      var args;
      args = Array.prototype.slice.call(arguments);
      if (args.length > 0 && Array.isArray(args[0])) {
        args = args.shift().concat(args);
      }
      return args.unshift(command);
    };
  });
  exports.mysql = mysql;
}).call(this);

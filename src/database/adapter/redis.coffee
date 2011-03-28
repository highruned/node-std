commands = [ 
	'append'
	'auth'
	'bgsave'
	'blpop'
	'brpop'
	'dbsize'
	'decr'
	'decrby'
	'del'
	'exists'
	'expire'
	'expireat'
	'flushall'
	'flushdb'
	'get'
	'getset'
	'hdel'
	'hexists'
	'hget'
	'hgetall'
	'hincrby'
	'hkeys'
	'hlen'
	'hmget'
	'hmset'
	'hset'
	'hvals'
	'incr'
	'incrby'
	'info'
	'keys'
	'lastsave'
	'len'
	'lindex'
	'llen'
	'lpop'
	'lpush'
	'lrange'
	'lrem'
	'lset'
	'ltrim'
	'mget'
	'move'
	'mset'
	'msetnx'
	'psubscribe'
	'publish'
	'punsubscribe'
	'randomkey'
	'rename'
	'renamenx'
	'rpop'
	'rpoplpush'
	'rpush'
	'sadd'
	'save'
	'scard'
	'sdiff'
	'sdiffstore'
	'select'
	'set'
	'setex'
	'setnx'
	'shutdown'
	'sinter'
	'sinterstore'
	'sismember'
	'smembers'
	'smove'
	'sort'
	'spop'
	'srandmember'
	'srem'
	'subscribe'
	'sunion'
	'sunionstore'
	'ttl'
	'type'
	'unsubscribe'
	'zadd'
	'zcard'
	'zcount'
	'zincrby'
	'zinter'
	'zrange'
	'zrangebyscore'
	'zrank'
	'zrem'
	'zrembyrank'
	'zremrangebyrank'
	'zremrangebyscore'
	'zrevrange'
	'zrevrank'
	'zscore'
	'zunion'
]

class redis
	constructor: (host, port, options = {}) ->
		connection = net.createConnection(port, host)
	
		@client = new RedisClient(connection, options)

	disconnect: () ->
		
	
	reconnect: () ->
		
	
	set_service: (service) ->
		@service = service
		@service.bind 'model_change', (model, property) =>
			console.log 'model changed: ' + model.type + ':' + model.id + ':' + property
			@client.set(model.type + ':' + model.id + ':' + property, model[property])
	
	reset: () ->
	
	is_active: () ->
		
	
	active: true
	client: null
	service: null
	types: 
		varchar: core.string
		int: core.integer
		float: core.float
		decimal: core.float
		datetime: core.datetime
		blob: core.string
		tinyint: core.integer
	

commands.forEach (command) ->
	redis::[command] = () ->
		args = Array.prototype.slice.call(arguments)
		
		if(args.length > 0 && Array.isArray(args[0])) 
			args = args.shift().concat(args)
		
		args.unshift(command)
		
		#@send_command.apply(this, args)

exports.mysql = mysql
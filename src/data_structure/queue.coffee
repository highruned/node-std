core = std('core')
database = std('database')

class queue
	constructor: (key, adapter) ->
		key ?= core.number.random()
		adapter ?= new database.adapter.memory()

	push: (item) ->
		@adapter.lpush(@key, item)
	
	pop: () ->
		return @adapter.rpop(@key)
	
	peek: () ->
		return @.items[0]
	
	is_empty: () ->
		return !@.items.length
	
	get items: () ->
		items = @adapter.lrange(@key, 0, -1)
	
		return items
		
	to_string: () ->
		return JSON.stringify(@.items)

queue:: = core.mixin(queue::, core.base::)

exports.queue = queue
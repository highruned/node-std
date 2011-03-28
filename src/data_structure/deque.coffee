core = std('core')

class deque
	constructor: (key, adapter) ->
		key ?= core.number.random()
		adapter ?= new database.adapter.memory()

	push_front: () ->
		@adapter.rpush(@key, item)
	
	push_back: (item) ->
		@adapter.lpush(@key, item)
	
	pop_front: () ->
		return @adapter.rpop(@key)
	
	pop_back: () ->
		return @adapter.lpop(@key)
		
	get items: () ->
		items = @adapter.lrange(@key, 0, -1)
	
		return items
		
	to_string: () ->
		return JSON.stringify(@.items)

		
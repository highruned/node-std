core = std('core')
data_structure = std('data_structure')

class deque
	push_front: (item) ->
		@adapter.rpush(@key, item)
	
	push_back: (item) ->
		@.push(item)
	
	pop_front: () ->
		return @.pop()
	
	pop_back: () ->
		return @adapter.lpop(@key)

deque:: = core.mixin(deque::, data_structure.queue::)

exports.deque = deque
core = std 'core'
data_structure = std 'data_structure'

base = core.mixin data_structure.queue

class deque extends base
	push_front: (item) ->
		@adapter.rpush(@key, item)
	
	push_back: (item) ->
		@.push(item)
	
	pop_front: () ->
		return @.pop()
	
	pop_back: () ->
		return @adapter.lpop(@key)

exports.deque = deque
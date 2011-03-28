core = std('core')
data_structure = std('data_structure')

class stack
	push: (item) ->
		@adapter.lpush(@key, item)
	
	pop: () ->
		return @adapter.lpop(@key)

stack:: = core.mixin(stack::, data_structure.queue::)

exports.stack = stack
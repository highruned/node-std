core = std('core')
data_structure = std('data_structure')

class bounded_queue
	constructor: (key, size, adapter) ->
		key ?= core.number.random()
		size ?= 5
		adapter ?= new database.adapter.memory()
	
		# call parent constructor instead
	
	push: (item) ->
		@.push(item)
	
	pop: () ->
		return @.pop()

bounded_queue:: = core.mixin(bounded_queue::, data_structure.queue::)

exports.bounded_queue = bounded_queue
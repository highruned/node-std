core = std 'core'
data_structure = std 'data_structure'

base = core.mixin data_structure.queue

class bounded_queue extends base
	constructor: (key, size, adapter) ->
		key ?= core.number.random()
		size ?= 5
		adapter ?= new database.adapter.memory()
	
		# call parent constructor instead
	
	push: (item) ->
		@.push(item)
	
	pop: () ->
		return @.pop()

exports.bounded_queue = bounded_queue
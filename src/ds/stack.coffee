core = std 'import core'
data_structure = std 'import data_structure'

class stack extends data_structure.queue
	push: (item) ->
		@adapter.lpush(@key, item)
	
	pop: () ->
		return @adapter.lpop(@key)

exports.stack = stack
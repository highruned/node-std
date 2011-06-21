core = std 'import core'

base = core.mixin Array

class array extends base
	constructor: () ->
	
	remove: (list, from, to) ->
		rest = list.slice (to || from) + 1 || list.length
		list.length = if from < 0 then list.length else from
		
		return list.push.apply(list, rest)

exports.array = array
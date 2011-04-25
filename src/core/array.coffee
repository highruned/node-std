core = std('core')

class array
	constructor: () ->
	
	remove: (list, from, to) ->
		console.log list.length, from
		rest = list.slice (to || from) + 1 || list.length
		list.length = if from < 0 then list.length else from
		
		return list.push.apply(list, rest)

array:: = core.mixin(array::, Array::)

exports.array = array
core = std('core')
fs = require('fs')

class file
	construct: (@path) ->
		

	write: (message) ->
		fs.open @path, 'a', 666, (e, id) ->
			fs.write id, message, null, 'utf8', () ->
				fs.close id, () ->
					console.log('file closed')

	path: null

file:: = core.mixin(file::, core.base::)
	
exports.file = file
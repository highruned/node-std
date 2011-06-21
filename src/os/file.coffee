core = std 'core' 

fs = require('fs')

base = core.mixin core.base

class file extends base
	construct: (@path) ->
		

	write: (message) ->
		fs.open @path, 'a', 666, (e, id) ->
			fs.write id, message, null, 'utf8', () ->
				fs.close id, () ->
					console.log('file closed')

	path: null
	
exports.file = file
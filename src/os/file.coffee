core = std 'core' 

fs = require('fs')

base = core.mixin core.base

class file extends base
	constructor: (@path) ->
		
		
	write: (message) ->
		fs.open @path, 'a', 666, (e, id) ->
			fs.write id, message, null, 'utf8', () ->
				fs.close id, () ->
					console.log('file closed')

	get_extension: () ->
		return file::get_extension(@path)
		
	get_mimetype: () ->
		return file::extension_to_mimetype(@get_extension())

	path: null
	
	
file::get_extension(path) = () ->
	return ''

file::extension_to_mimetype = () ->
	###
	if(e2 == "gif")
			return "image/gif";
	else if(e2 == "png")
			return "image/png";
	else if(e2 == "html")
			return "text/html";
	else if(e2 == "swf")
			return "application/x-shockwave-flash";
	else if(e2 == "ico")
			return "image/x-icon";
	else if(e2 == "flv")
			return "flv-application/octet-stream";
	else if(e2 == "xml")
			return "application/xml";
	else if(e2 == "json")
			return "application/json";
	###
	
	return ''

exports.file = file
core = std('import core')
site = std('import site')

base = core.mixin site.post

class post extends base
	constructor: (@name) ->

	get_feed: () ->
	

exports.post = post
core = std 'import core'
site = std 'import site'

base = core.mixin site.post

class post extends base
	constructor: () ->


exports.post = post
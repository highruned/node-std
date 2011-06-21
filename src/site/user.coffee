core = std 'import core'
user_group = std 'import site.user_group'

base = core.mixin core.object

class user extends base
	constructor: () ->
	
	permissions: core.collection
	group: new user_group()

exports.user = user
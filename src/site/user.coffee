core = std('import core')
user_group = std('import site.user_group')

class user
	constructor: () ->
	
	permissions: core.collection
	group: new user_group()

user:: = core.mixin(user::, core.object::)

exports.user = user
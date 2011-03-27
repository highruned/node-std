core = std('import core')

class user
	constructor: (@name) ->
	
	permissions: core.collection

user:: = core.mixin(user::, core.object::)

exports.user = user
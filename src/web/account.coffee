core = std 'core'
life = std 'life'

base = core.mixin life.account

class account extends base
	constructor: (options) ->
		$.extend(@, options)

	username: null
	password: null
	email: null
	
exports.account = account
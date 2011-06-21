core = std 'import core'

base = core.mixin core.object

class post extends base
	constructor: () ->

	
	up_votes: 0
	down_votes: 0
	rating: 0
	content: ''
	views: 0
	title: ''

exports.post = post
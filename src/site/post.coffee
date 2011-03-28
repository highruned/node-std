core = std('import core')

class post
	constructor: () ->

	move: (meters) ->
		console.log @title + " moved " + meters + "m."

	climb: (meters) ->
		console.log @title + " climbed " + meters + "m."
	
	up_votes: 0
	down_votes: 0
	rating: 0
	content: ''
	views: 0
	title: ''

post:: = core.mixin(post::, core.object::)

exports.post = post
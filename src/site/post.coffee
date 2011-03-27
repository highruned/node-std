core = std('import core')

class post
	constructor: (@name) ->

	move: (meters) ->
		console.log @name + " moved " + meters + "m."

	climb: (meters) ->
		console.log @name + " climbed " + meters + "m."
	
	up_votes: 0
	down_votes: 0
	rating: 0
	text: ''
	views: 0

post:: = core.mixin(post::, core.object::)

exports.post = post
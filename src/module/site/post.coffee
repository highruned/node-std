core = std('import core')
framework = std('import framework')

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

post:: = core.object.create(
	core.object::,
	core.trait.compose(
		core.trait.override(
			core.trait(post::),
			core.trait(framework.mvc.model::)
		)
	)
)

exports.post = post
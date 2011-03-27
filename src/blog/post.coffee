core = std('import core')
site = std('import site')

class post
	constructor: (@name) ->

	move: (millimeters) ->
		console.log @name + " moved " + millimeters + "mm."
  
	prompt_color: () ->
    @set color: '#fff'
  
  
post:: = core.object.create(
	core.object::,
	core.trait.compose(
		core.trait.override(
			core.trait(post::),
			core.trait(site.post::)    
		)
	)
)

exports.post = post
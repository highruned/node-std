core = std('import core')
site = std('import site')

class post
	constructor: (@name) ->

	move: (millimeters) ->
		debug.trace @name + " moved " + millimeters + "mm."
  
	prompt_color: () ->
    @set color: '#fff'
  
post:: = core.mixin post::, site.post::

exports.post = post
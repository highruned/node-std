core = std 'core'

class router
	constructor: () ->
	
	
	run: () ->
		routes.foreach () ->
			
	add_path: (path) ->
		@routes.add path
	
	routes: new core.collection()

router:: = core.mixin router::, core.base::

exports.router = router
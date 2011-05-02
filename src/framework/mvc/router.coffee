core = std 'core'

class router

	run: () ->
		routes.foreach () ->
			
	add_path: (path) ->
		@routes.add path
	
	routes: new core.collection()

router:: = core.mixin router::, core.base::

exports.router = router
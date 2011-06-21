core = std 'import core'

base = core.mixin core.base

class router extends base
	run: () ->
		routes.foreach () ->
			
	add_path: (path) ->
		@routes.add path
	
	routes: new core.collection()

exports.router = router
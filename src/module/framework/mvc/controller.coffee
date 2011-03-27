core = include('core')

class Controller
	constructor: () ->

Controller:: = Object.create(
	Object::,
	core.Trait.compose(
		core.Trait.override(
			core.Trait(Controller::),
			core.Trait(core.Base::),   
			core.Trait(core.Backbone.Controller::)
		)
	)
)

core.Utility.bind(core.Backbone.Controller, Controller::)()
	
exports.Controller = Controller
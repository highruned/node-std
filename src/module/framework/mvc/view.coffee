core = include('core')

class View
	constructor: () ->

View:: = Object.create(
	Object::,
	core.Trait.compose(
		core.Trait.override(
			core.Trait(View::),
			core.Trait(core.Base::),
			core.Trait(core.Backbone.View::)
		)
	)
)

core.Utility.bind(core.Backbone.View, View::)()
	
exports.View = View
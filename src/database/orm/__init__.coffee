backbone = std_require('core.backbone').backbone

backbone.sync = (method, model) ->
	console.log(method + ": " + JSON.stringify(model))

exports.orm =
	model: std_require('database.orm.model').model
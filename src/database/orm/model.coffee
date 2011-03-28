core = std('import core')

###
Events:
	pre_persist
	post_persist
	pre_update
	post_update
	pre_remove
	post_remove
	pre_load
	post_load
	pre_refresh
	post_refresh
###
class model
	constructor: () ->
		
	refresh: () ->
		# reload from db
	
	remove: () ->
		# remove from db
		
	save: (callback) ->
		err = null
		res = null
		
		if(!@service)
			return callback(err, res)
		
		@service.save_model(this, callback)
		
	set_service: (service) ->
		@service = service
	
	
	id: null
	service: null
	
model:: = core.mixin(model::, core.backbone.model::, core.behavior.timestamp::, core.base::)

core.utility.bind(core.backbone.model, model::)()
	
exports.model = model
core = std('import core')

class service
	constructor: () ->
		
	setup_model: (model) ->
		model.service = @
		
		model.bind 'change', (property) =>
			@adapter
		
		# hack
		model.contractors.bind 'add', (item) =>
			@adapter.lpush(item)
	
	set_adapter: (adapter) ->
		@adapter = adapter
		@adapter.set_service(this)
	
	save_model: (model, callback) -> 
		# todo(eric) make callback default to dummy
		
		@trigger('before_save')
		
		@adapter.save model.id, model.serialize(), (err, res) ->
			if(res.ok)
				model.id = res.id
				model.revision = res.rev
			
			
			callback(err, res)
		
		@trigger('after_save')
	
	id: null
	models: core.collection
	adapter: null
	pool: database.connection_pool
	
service:: = core.mixin(service::, core.base::)

exports.service = service
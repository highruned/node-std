core = std('import core')

class timestamp
	constructor: () ->
		@bind 'before_persist', () =>
			@created_at.update()
	
		@bind 'before_update', () =>
			@updated_at.update()
		
	created_at: core.datetime
	updated_at: core.datetime
	
timestamp:: = core.object.create(
	core.object::,
	core.trait(timestamp::) 
)

exports.timestamp = timestamp
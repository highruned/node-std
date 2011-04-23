core = std('core')

datetime = Date

datetime::now = () ->
	

datetime::format = (format) ->
	timestamp = @to_timestamp
	
	return core.3rd.strftime(format, timestamp)

datetime::to_timestamp = () ->
	return Math.floor(this.getTime() / 1000);

exports.datetime = datetime
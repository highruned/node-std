core = std('core')

string = String

string::to_upper = () ->
	return this.toUpperCase();

string::to_lower = () ->
	return this.toLowerCase();
	
string::url_encode = () ->
	return @

string::to_int = () ->
	return 0
	
string::to_hex = () ->
	return 0
	
string::url_encode = () ->
	return ''
	
string::url_decode = () ->
	return ''
	
string::find_and_replace = () ->
	return ''
	
string::to_hex = () ->
	return ''

string::format = core.vendor.sprintf
	
exports.string = string
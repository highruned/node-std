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
	
string::format = core.3rd.sprintf
	
exports.string = string
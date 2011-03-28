class mysql
	disconnect: () ->
		
	
	reconnect: () ->
		
	
	reset: () ->
	
	is_active: () ->
		
	
	types: 
		varchar: core.string
		int: core.integer
		float: core.float
		decimal: core.float
		datetime: core.datetime
		blob: core.string
		tinyint: core.integer
	

exports.mysql = mysql
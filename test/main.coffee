tests = {}


tests.foreach (key, value) ->
	console.log "Running " + key + " ." + (result ? 'Pass' : 'Fail')

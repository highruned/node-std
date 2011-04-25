

class memory
	rpush: (item) ->
		@items.push(item)

	lpop: () ->
		@items.shift()

	clear: () ->
		@items = new core.collection()
		
	items: new core.collection()


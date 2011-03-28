core = std('import core')

class page
	constructor: () ->
	
	content: ''
	views: 0
	title: ''
	blocks: core.collection

page:: = core.mixin(page::, core.object::)

exports.page = page
core = std('import core')

class page_block
	constructor: () ->
	
	content: ''
	title: ''

page_block:: = core.mixin(page_block::, core.object::)

exports.page_block = page_block
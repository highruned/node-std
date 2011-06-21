core = std 'import core'

base = core.mixin core.object

class page_block extends base
	constructor: () ->
	
	content: ''
	title: ''


exports.page_block = page_block
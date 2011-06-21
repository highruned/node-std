core = std 'import core'

base = core.mixin core.object

class page extends base
	constructor: () ->
	
	content: ''
	views: 0
	title: ''
	blocks: core.collection

exports.page = page
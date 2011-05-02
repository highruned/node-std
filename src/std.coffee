fs = require 'fs'

###
Use to import packages or package contents from the STD.

Usage:
	core = std('import core')
	string = std('import core.string')
	object, string = std('from core import object, string')
	string = std('from core import string')
###
std = (path, use_modules = true) ->
	#console.log path

	###
	for path in std::paths
		do(path) ->
			fs.readFile path, (err, contents) ->
				#compile path, contents.toString()
	###
	if path.substr(0, 8) == 'import *'
		return (
			core: require './' + 'core' + '/__init__.js'
			site: require './' + 'site' + '/__init__.js'
			blog: require './' + 'blog' + '/__init__.js'
			debug: require './' + 'debug' + '/__init__.js'
			framework: require './' + 'framework' + '/__init__.js'
			database: require './' + 'database' + '/__init__.js'
		)
	else
		if use_modules
			try
				if path.substr(0, 7) == 'import '
					path = path.substr 7
			
				new_path = './' + path.replace(/\./g, '/') + '.js'
				
				if new_path.search('std') == 0 # fix browserify
					new_path.replace('std', 'std/lib')
				
				return require new_path
			catch e
				if e.message.replace('std/lib/', './') != "Cannot find module '" + new_path + "'"
					console.log new_path
					throw e
				
				new_path = './' + path.replace(/\./g, '/') + '/__init__.js'
				
				return require new_path

		return require path

		
std::paths = []

###
Usage:
	std = require('std').std
	std.add_path('./modules')
	std('import my_module')
###
std::add_path = (path) ->
	@paths = path

###
Use internally because you can't std() within a package's __init__
###
std_import = (path, use_modules = true) ->
	#console.log path
	
	if use_modules
		try
			new_path = './' + path.replace(/\./g, '/') + '.js'
			
			if new_path.search('std') == 0 # fix browserify
				new_path.replace('std', 'std/lib')
				
			return require new_path
		catch e
			if e.message.replace('std/lib/', './') != "Cannot find module '" + new_path + "'"
				console.log new_path
				throw e
				
			new_path = './' + path.replace(/\./g, '/') + '/__init__.js'
			
			return require new_path

		return require path

if window?
	master = window
	master['global'] = window
else if global?
	master = global
	
	jsdom = require 'jsdom'
	
	master['document'] = jsdom.jsdom('<html><head></head><body></body></html>')
	master['window'] = document.createWindow()
	master['jQuery'] = master['$'] = require('jquery').create(window)
	
	window.location.host = 'localhost'
	
	jQuery.ready()
	
	$.isReady = true

exports.std = master['std'] = std
exports.std_import = master['std_import'] = std_import
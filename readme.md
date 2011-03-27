# node-std
Extensive, consistent, modular library. Grab what you need; ignore the rest.

## Installation
1. Run: `npm install std`
1. Done!

## Usage
	var blog = std('import blog');
	
	var p1 = blog.post();
	p1.title = 'Hello world!';
	p1.save();

### Custom modules
1. Install STD if you haven't already. 
1. Create a `modules` directory for your module. 
1. Create your `my_module` directory.
1. Add a `__init__.js` package file to your module directory.
1. Add any exports to your __init__ file that you may want to be accessible.
1. You're ready to create your module's structure.

Add your modules to STD's importer:
	var std = require('std').std;
	std.add_path('./modules');
	
	var my_module = std('import my_module');

## Important

## Contribute
STD is written in CoffeeScript. You will need to be familiar with the syntax, as it is compiled down to JavaScript.

Command to watch and compile CoffeeScript: 
1. `cd /usr/local/lib/node/std/`  
1. `coffee -wc -o lib src`  

### Standard

#### Naming Convention
All code is to be lower-case using underscores for logical separation. We know JavaScript, and by consequence Node.js is traditionally pascal/camel case. Sorry.

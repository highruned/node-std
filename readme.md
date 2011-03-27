# node-std
Extensive, consistent, modular library.

## Installation
1. Run: `npm install std`
1. Done!

## Usage
	var blog = std('import blog');
	
	var p1 = blog.post();
	p1.title = 'Hello world!';
	p1.save();

### Custom modules
Install STD if you haven't already. 
Create a `modules` directory for your module. 
Create your `my_module` directory.
Add a `__init__.js` package file to your module directory.
Add any exports to your __init__ file that you may want to be accessible.
You're ready to create your module's structure.

Add your modules to STD's importer:
	var std = require('std').std;
	std.add_path('./modules');
	
	var my_module = std('import my_module');

## Important

## Standard
All code is to be 

## Technical
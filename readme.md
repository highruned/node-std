# node-std
The idea of this library is to provide you with all the essential building blocks you need to get your node on. Extensive. Consistent. Structured. Modular. Grab what you need; ignore the rest.

Like it? Don't like it? It's all about picking your poison. I've chosen an uncommon (unorthodox?) poison, but this library will be updated frequently, have many examples and documentation, and that's what matters.

Included libraries:  

1. core - Essentials. Mixin your way to victory!  
1. blog  
1. cms  
1. database - We all need a little persistency in our lives.  
1. debug - Write to me.  
1. forum  
1. framework - MVC? HMVC? MVVM? Your choice.  
1. site - Startup.  
1. wiki  
1. game  
1. ...more!

## Installation  
1. Run this command: `npm install node-std`. If you don't have NPM installed, you can get it [here](https://github.com/ericmuyser/node-std/zipball/master), navigate to the `node-std` directory and run: `npm install .`
1. Done!  

## Usage
	var std = require('std').std;
	
	var blog = std('import blog');
	
	var p1 = blog.post();
	p1.title = 'Hello world!';

### Custom modules  
1. Install node-std if you haven't already.  
1. Create `modules` directory for your module.  
1. Create `my_module` directory.  
1. Add a `__init__.js` package file to your module directory.  
1. Add any exports to your package file that you may want to be accessible.  
1. You're ready to create your module's structure.  

Add your modules to node-std's importer:  

	var std = require('std').std;
	std.prototype.add_path('./modules');
	
	var my_module = std('import my_module');

## Important
The API is still under construction, and may experience highly volatile changes. 

## Contribute
You can find STD in the `src` directory, which is CoffeeScript compiled down to JavaScript in the `lib` directory.

Command to watch and compile:  

1. `cd node-std`  
1. `node bake.js`  

### Standard

#### Naming Convention
All code is to be lower-case using underscores for logical separation. Everything is lower-cased and underscored: variables, functions, classes, directories, files, event names, table names, and so on.
We are aware JavaScript, and by consequence Node.js is traditionally pascal/camel case. Sorry.

### Unit Testing
You can find existing unit tests in the `test` directory.

## Projects using node-std
[Nether](https://github.com/ericmuyser/node-nether) (unreleased)

## Credits
Major thanks to the CoffeeScript team.

Uses the following Node modules: backbone, underscore, connect, socket.io
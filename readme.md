# node-std
The idea of this library is to provide you with all the essential building blocks you need to get your node on. Extensive. Consistent. Modular. Grab what you need; ignore the rest.

Included libraries:
1. core - Essentials. Mixin your way to victory!
1. blog
1. cms
1. database - Persistency at its finest.
1. debug - Write to me.
1. forum
1. framework - MVC? HMVC? Your choice.
1. site - Startup.
1. wiki

## Installation
1. Run this command: `npm install std`. If you don't have NPM installed, you can get it *here* or download manually STD *here*.
1. Done!

## Usage
	var std = require('std').std;
	
	var blog = std('import blog');
	
	var p1 = blog.post();
	p1.title = 'Hello world!';
	p1.save();

### Custom modules
1. Install STD if you haven't already. 
1. Create `modules` directory for your module. 
1. Create `my_module` directory.
1. Add a `__init__.js` package file to your module directory.
1. Add any exports to your package file that you may want to be accessible.
1. You're ready to create your module's structure.

Add your modules to STD's importer:
	var std = require('std').std;
	std.add_path('./modules');
	
	var my_module = std('import my_module');

## Important
The API is still under construction, and may experience highly volatile changes. 

## Contribute
You can find STD in the `src` directory, which is CoffeeScript compiled down to JavaScript in the `lib` directory.

Command to watch and compile CoffeeScript:  
1. `cd /usr/local/lib/node/std/`  
1. `coffee -wc -o lib src`  

### Standard

#### Naming Convention
All code is to be lower-case using underscores for logical separation. Everything is lower-cased and underscored: variables, functions, classes, directories, files, and so on.
We are aware JavaScript, and by consequence Node.js is traditionally pascal/camel case. Sorry.

### Unit Testing
You can find existing unit tests in the `test` directory.

## Projects using STD
None that are public yet!

## Credits
Major thanks to the CoffeeScript team.

Uses the following Node modules: backbone, underscore, connect, socket.io, node.js, mongoose, haml, less

Draws inspiration from the following projects: Boost, OGRE, haXe, Zend, Doctrine, Rails, jQuery, MaNGOS, as well as Phpr, C#.NET

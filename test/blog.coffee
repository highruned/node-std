std = require('std').std

blog = std('import blog')
console.log blog

b1 = new blog.post 'abc'

b1.move(5)
b1.climb(10)

b1.bind 'change:color', (item, color) ->
	console.log color

console.log b1.set

b1.set color: 'white'

b1.prompt_color()

b1.bind 'change:abc', (item, value) ->
	console.log item, value

b1.set abc: 'zyc'

# block forever
setTimeout(() -> 
	console.log(5)
	5000000000 
)
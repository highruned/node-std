core = std 'import core'
math = std 'import math'

class matrix
	

matrix:: = core.mixin matrix::, math.vector::

exports.matrix = matrix
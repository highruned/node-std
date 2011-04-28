core = std 'import core'
math = std 'import math'

class quaternion
	

quaternion:: = core.mixin quaternion::, math.vector::

exports.quaternion = quaternion
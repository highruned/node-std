core = std 'import core'
math = std 'import math'

base = core.mixin math.vector

class quaternion extends base

exports.quaternion = quaternion
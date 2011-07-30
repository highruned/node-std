(function() {
  var core, mixin;
  core = std('import core');
  mixin = function() {
    var fn, i, key, result, trait, traits, value, _len;
    traits = arguments;
    arguments = [].slice.call(traits);
    traits = [].slice.call(traits);
    for (i = 0, _len = arguments.length; i < _len; i++) {
      trait = arguments[i];
      if (i > 0) {
        trait.prototype.__super__ = traits[i - 1].prototype;
      }
      traits[i] = core.trait(trait.prototype);
    }
    result = Object.create(Object.prototype, core.trait.compose(core.trait.override.apply(null, traits)));
    fn = arguments[0];
    for (key in result) {
      value = result[key];
      fn.prototype[key] = value;
    }
    return fn;
  };
  exports.mixin = mixin;
}).call(this);

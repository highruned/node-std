(function() {
  var base, core, person;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('core');
  base = core.mixin(core.base);
  person = (function() {
    function person(options) {
      $.extend(this, options);
    }
    __extends(person, base);
    person.prototype.name = null;
    person.prototype.birthday = null;
    person.prototype.address = null;
    person.prototype.country = null;
    person.prototype.gender = null;
    return person;
  })();
  exports.person = person;
}).call(this);

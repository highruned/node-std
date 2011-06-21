(function() {
  var array, base, core;
  var __hasProp = Object.prototype.hasOwnProperty, __extends = function(child, parent) {
    for (var key in parent) { if (__hasProp.call(parent, key)) child[key] = parent[key]; }
    function ctor() { this.constructor = child; }
    ctor.prototype = parent.prototype;
    child.prototype = new ctor;
    child.__super__ = parent.prototype;
    return child;
  };
  core = std('import core');
  base = core.mixin(Array);
  array = (function() {
    function array() {}
    __extends(array, base);
    array.prototype.remove = function(list, from, to) {
      var rest;
      rest = list.slice((to || from) + 1 || list.length);
      list.length = from < 0 ? list.length : from;
      return list.push.apply(list, rest);
    };
    return array;
  })();
  exports.array = array;
}).call(this);

(function() {
  var array, core;
  core = std('core');
  array = (function() {
    function array() {}
    array.prototype.remove = function(list, from, to) {
      var rest;
      console.log(list.length, from);
      rest = list.slice((to || from) + 1 || list.length);
      list.length = from < 0 ? list.length : from;
      return list.push.apply(list, rest);
    };
    return array;
  })();
  array.prototype = core.mixin(array.prototype, Array.prototype);
  exports.array = array;
}).call(this);

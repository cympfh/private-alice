// Generated by CoffeeScript 1.7.1
(function() {
  var random_color;

  random_color = function() {
    var list;
    list = ['red', 'black', 'aqua', 'blue', 'green'];
    return list[list.length * Math.random() | 0];
  };

  window.random_color = random_color;

}).call(this);
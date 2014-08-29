// Generated by CoffeeScript 1.7.1
(function() {
  var newGame;

  newGame = function(W, H, images) {
    var game;
    game = {};
    game._element = document.getElementById('enchant-stage');
    game._element.innerHTML = 'loading ######========  ';
    game.canvas = document.createElement('canvas');
    game.ctx = game.canvas.getContext('2d');
    game.canvas.width = W;
    game.canvas.height = H;
    return game;
  };

  window.newGame = newGame;

}).call(this);

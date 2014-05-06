var Game = require('./game');

var games = {};

module.exports.games = {
  get: function(gameId) {
    return games[gameId];
  },

  find: function(check) {
    for(id in games) {
      var g = games[id];
      if(check(g)) return g;
    }
  },

  create: function(params) {
    var game = new Game(params);
    games[game.id] = game;
    return game;
  },

  delete: function(gameId) {
    delete games[gameId];
  }
};
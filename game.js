function Game(params) {
  params = params || {};

  this.id = params.id;
  this.player1 = params.player1;
  this.player2 = params.player2;
  this.question = null;
  this.winner = null;

  this.server_key = params.key
  this.server_api_key = params.apiKey
  this.server_secret = params.apiSecret

  // We need to store the leetcoin userids
  this.player1leetcoinKey = params.player1leetcoinKey
  this.player2leetcoinKey = params.player2leetcoinKey
}

Game.prototype.generateQuestion = function() {
  this.question = {
    a: Math.floor(Math.random() * 1000),
    b: Math.floor(Math.random() * 1000)
  };
}

Game.prototype.isCorrect = function(answer) {
  return !!this.question && this.question.a + this.question.b == answer;
}

Game.prototype.wireSafe = function() {
  return {
    id: this.id,
    player1: this.player1 && this.player1.id,
    player2: this.player2 && this.player2.id,
    question: this.question,
    winner: this.winner,
    player1leetcoinKey: this.player1leetcoinKey,
    player2leetcoinKey: this.player2leetcoinKey
  };
}

module.exports = Game;
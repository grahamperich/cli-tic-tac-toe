// board constructor
var prompt = require('prompt');
prompt.start();

function Game() {
  this.boardMatrix = [];

  for (var i = 0; i < 3; i++) {
    this.boardMatrix.push(['__', '__', '__']);
  }
}

Game.prototype.showBoard = function() {
  console.log(this.boardMatrix.join('\n'));
}

Game.prototype.startGame = function() {
  console.log('player 1 is X');
  console.log('player 2 is O');
  console.log('player 1, choose your action:');
  this.showBoard();
  prompt.get(['coordinate'], function(err, result) {
    this.playerAction(result.coordinate)
  }.bind(this));
  
}

Game.prototype.playerAction = function(coordinate) {
  console.log('PLAYERS COORDINATE CHOSEN: ', coordinate)
}


var myGame = new Game();
myGame.startGame();
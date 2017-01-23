// board constructor
var prompt = require('prompt');
prompt.start();

function Game() {
  this.board = [];

  for (var i = 0; i < 3; i++) {
    this.board.push(['__', '__', '__']);
  }
}

Game.prototype.showBoard = function() {
  console.log(this.board.join('\n'));
}

Game.prototype.startGame = function() {
  console.log('player 1 is X');
  console.log('player 2 is O');
  console.log('player 1, choose your action:');
  this.showBoard();
  prompt.get(['coordinate'], function(err, result) {
    this.playerAction(result.coordinate, true)
  }.bind(this));
  
}

Game.prototype.playerAction = function(coordinate, bool) {
  
  // if bool is true, it's player 1's turn
  if (bool) {
    console.log('PLAYER 1 COORDINATE CHOSEN: ', coordinate)
    let x = parseInt(coordinate.split(',')[0]);
    let y = parseInt(coordinate.split(',')[1]);
    this.board[x - 1][y - 1] = 'X';
    this.showBoard();
    console.log('PLAYER 2\'s TURN NOW');
  } else {  // if bool is false, it's player 2's turn
    console.log('PLAYER 2 COORDINATE CHOSEN: ', coordinate)
    let x = parseInt(coordinate.split(',')[0]);
    let y = parseInt(coordinate.split(',')[1]);
    this.board[x][y] = 'O';  
    this.showBoard();
    console.log('PLAYER 1\'s TURN NOW');
  }
  
}


var myGame = new Game();
myGame.startGame();
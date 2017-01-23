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

Game.prototype.moveIsValid = function(x, y) {
  var validMove = this.board[x][y] === '__' ? true : false;
  return validMove
}

Game.prototype.playerAction = function(coordinate, bool) {
  let x = parseInt(coordinate.split(',')[0]) - 1;
  let y = parseInt(coordinate.split(',')[1]) - 1;
  console.log('COORDINATE CHOSEN: ', coordinate);

  // if bool is true, it's player 1's turn
  if (bool) {
    if (this.moveIsValid(x, y)) {
      this.board[x][y] = 'X';
    } else {
      console.log('That move is invalid. Try again.');

    }
    
    this.showBoard();

    // get player two's action
    console.log('PLAYER 2\'s TURN NOW');
    prompt.get(['coordinate'], function(err, result) {
      this.playerAction(result.coordinate, false)
    }.bind(this));
  } else {  // if bool is false, it's player 2's turn
    this.board[x][y] = 'O';  
    this.showBoard();

    //get player one's action
    console.log('PLAYER 1\'s TURN NOW');
    prompt.get(['coordinate'], function(err, result) {
      this.playerAction(result.coordinate, true)
    }.bind(this));   
  }
  
}




var myGame = new Game();
myGame.startGame();
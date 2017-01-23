// board constructor

function Game() {
  this.boardMatrix = [];
  for (var i = 0; i < 3; i++) {
    this.boardMatrix.push(['__', '__', '__']);
  }
}

Game.prototype.showBoard = function() {
  console.log(this.boardMatrix.join('\n'));
}

var myGame = new Game();
myGame.showBoard();
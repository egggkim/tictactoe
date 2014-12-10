angular
  .module('gameApp')
  .controller('GameController', GameController);

function GameController() {

  this.userChoice = userChoice; 
  this.square     = document.getElementsByClassName('square');
  this.clickCount = clickCount; 
}

// function checkWins() {

// }

// function players() {
//   this.players = [];
// }


function userChoice(square) {
  for (var i = 0; i < this.square.length; i++) {
    this.square[i].innerText = "X";
  }
}



// THIS DETERMINES WHICH PLAYER'S TURN IT IS (CURRENTLY ONLY WORKS IN CONSOLE)
var i = 0;
function clickCount() {
  i += 1;
  document.getElementById("square1").value = i;
  if (i % 2 === 0) {
   console.log("Player 2 Turn");
  }
  else {
   console.log("Player 1 Turn");
  }
}

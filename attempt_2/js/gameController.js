angular
  .module('gameApp')
  .controller('GameController', GameController);

function GameController(){

  this.userChoice = userChoice; 
  this.square     = document.getElementsByClassName('square');
  this.clickCount = clickCount; 
  this.gamePieces = [ 
    {"square": "a1", "playerClicked": false},
    {"square": "b1", "playerClicked": false},
    {"square": "c1", "playerClicked": false},

    {"square": "a2", "playerClicked": false},
    {"square": "b2", "playerClicked": false},
    {"square": "c2", "playerClicked": false},

    {"square": "a3", "playerClicked": false},
    {"square": "b3", "playerClicked": false},
    {"square": "c3", "playerClicked": false},
  ];
}

function userChoice(square){
  for (var i = 0; i < this.square.length; i++){
    this.square[i].innerText = "X";
  }
}

// THIS DETERMINES WHICH PLAYER'S TURN IT IS (CURRENTLY ONLY WORKS IN CONSOLE)
var i = 0;
function clickCount(){
  i += 1;
  // this.square.value = i;
  document.getElementById("square1").value = i;
  if (i % 2 === 0) {
   console.log("Player 2 Turn");
  }
  else {
   console.log("Player 1 Turn");
  }

}

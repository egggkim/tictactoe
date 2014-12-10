angular
  .module('gameApp')
  .controller('GameController', GameController);

function GameController() {

  this.userChoice = userChoice; 
  this.square     = document.getElementsByClassName('square');
  this.clickCount = clickCount; 
  this.gameBoard  = [ 
    {square: "a1", playerClicked: ""},
    {square: "b1", playerClicked: ""},
    {square: "c1", playerClicked: ""},

    {square: "a2", playerClicked: ""},
    {square: "b2", playerClicked: ""},
    {square: "c2", playerClicked: ""},

    {square: "a3", playerClicked: ""},
    {square: "b3", playerClicked: ""},
    {square: "c3", playerClicked: ""},
  ];
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

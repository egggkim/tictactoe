angular
  .module("tttApp")
  .controller("tttsController", tttsController);

function tttsController(){

  var self = this;

  self.boardSquareList  = [
    {playerClicked: " "},
    {playerClicked: " "},
    {playerClicked: " "},

    {playerClicked: " "},
    {playerClicked: " "},
    {playerClicked: " "},

    {playerClicked: " "},
    {playerClicked: " "},
    {playerClicked: " "}
  ];

  self.playerObj        = playerObj; 
  self.playerTurn       = playerTurn;
  self.tileSelect       = tileSelect;
  self.selectionDisplay = document.getElementById("testing");
  self.checkWin         = checkWin;


  function playerObj(userName){
    var playerOne = new playerObj;
    var playerTwo = new playerObj;
  }

  var i = 0;
  function playerTurn($index){
    i += 1;
    document.getElementsByClassName("game-board").value = i;
    if (i % 2 === 0){
      // make player constructor function 
      self.boardSquareList[$index].playerClicked = "x";
    }
    else{
      self.boardSquareList[$index].playerClicked = "o";
    }
  }

  function tileSelect($index){
    console.log(self.boardSquareList);
    console.log("a tile has been selected");
  }


  function checkWin(){
 
  }
}

angular
  .module("tttApp")
  .controller("tttsController", tttsController);

function tttsController(){

  var self = this;
  self.winningMessage = " ";

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

  // self.gameBoard        = getBoardSquareList();
  // self.playerObj        = playerObj; 
  self.playerTurn       = playerTurn;
  // self.tileSelect       = tileSelect;
  // self.selectionDisplay = document.getElementById("testing");
  // self.checkWin         = checkWin;
  // self.addPlayer        = addPlayer;
  self.currentPlayer    = 1; 

  // function getBoardSquareList(){
  //   var ref = new Firebase("https://tic--tac--toe.firebaseio.com/");
  //   return $firebase(ref).$asArray();
  // }
  // self.gameBoard$save();

  // function playerObj(){
  //   // wrap this function in an IIFE to load immediately 
  //     console.log("playerObj function connected");
  //   document.getElementById("popup").style.display = 'none';

  function playerTurn($index){
    if (self.boardSquareList[$index].playerClicked = " "){
      if (self.currentPlayer === 1){
        self.boardSquareList[$index].playerClicked = "x";
        self.currentPlayer = 2;
      }
      else {
        self.boardSquareList[$index].playerClicked = "o";
        self.currentPlayer = 1;
      }
    }


    checkRows();
    checkColumns();
    diagonalCheck();
  }

  function checkLine(index1, index2, index3){
    var arr = self.boardSquareList;
    var letter1 = "x";
    var letter2 =  "o";

    var line = arr[index1].playerClicked + arr[index2].playerClicked + arr[index3].playerClicked;
    if (line === letter1 + letter1 + letter1){
      console.log(letter1 + " won");
      self.winningMessage = letter1 + " won";
    }
    else if (line === letter2 + letter2 + letter2){
      console.log(letter2 +" won");
      self.winningMessage = letter2 + " won";
    }
  }

  function checkRows(){
    checkLine(0, 1, 2);
    checkLine(3, 4, 5);
    checkLine(6, 7, 8);
  }

  function checkColumns(){
    checkLine(0, 3, 6);
    checkLine(1, 4, 7);
    checkLine(2, 5, 8);
  }
  function diagonalCheck(){
    checkLine(0, 4, 8);
    checkLine(2, 4, 6);
  }


  // function tieCondition(){
  //   console.log("checking tie condition")
  // }

  // function currentPlayer(){
  //   if (self.currentPlayer == 1){
  //     self.currentPlayer == 0;
  //   }
  //   else {
  //     self.currentPlayer ==1;
  //   }
  // }

  function tileSelect($index){
    console.log(self.boardSquareList);
    console.log("a tile has been selected");
  }

  // function addPlayer(newPlayerObj){
  //   self.boardSquareList.$add(newPlayerObj);
  //   self.newPlayer = null;
  // }
  // function checkWin(){
  //   if (boardSquareList.playerClicked.value [0,1,2] || [3,4,5] || [6,7,8] || //row
  //      [0,3,6] || [1,4,7] || [2,5,8] || //column
  //      [2,4,6] || [0,4,8] = "o") {
  //     console.log("player 1 wins");
  //   }
  //   else if (boardSquareList.playerClicked.value [0,1,2] || [3,4,5] || [6,7,8] || //row
  //      [0,3,6] || [1,4,7] || [2,5,8] || //column
  //      [2,4,6] || [0,4,8] = "x") {
  //     console.log("player 1 wins");

  //  if (self.boardSquareList[0] == self.boardSquareList[1]) && (self.boardSquareList[1] == self.boardSquareList[2]){
      // console.log("player wins")}


      // function checkRows(){
      //   if boardSquareList[i]
      // }

      // function checkColumns(){

      // }

      // function diagonalCheck(){

      // }

  }


  // }


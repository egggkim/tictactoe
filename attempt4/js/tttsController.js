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
    else {
      console.log("fix playerTurn function");
    }

    rowCheck();
    columnCheck();
    diagonalCheck();
  }

  function rowCheck(){
    if(
      // checks first row
      (self.boardSquareList[0].playerClicked === self.boardSquareList[1].playerClicked === self.boardSquareList[2].playerClicked) ||
      // checks second row
      (self.boardSquareList[3].playerClicked === self.boardSquareList[4].playerClicked === self.boardSquareList[5].playerClicked) ||
      // checks third row
      (self.boardSquareList[6].playerClicked === self.boardSquareList[7].playerClicked === self.boardSquareList[8].playerClicked)){
      console.log("somebody won a row");
    }

    else{
      console.log("fix your row check");
    }
  }

  function columnCheck(){
    if(
      // checks first column
      (self.boardSquareList[0].playerClicked === self.boardSquareList[3].playerClicked) && 
      (self.boardSquareList[3].playerClicked === self.boardSquareList[6].playerClicked) ||
      // checks second column
      (self.boardSquareList[1].playerClicked === self.boardSquareList[4].playerClicked) && 
      (self.boardSquareList[7].playerClicked === self.boardSquareList[7].playerClicked) ||
      // checks third column
      (self.boardSquareList[2].playerClicked === self.boardSquareList[5].playerClicked) && 
      (self.boardSquareList[5].playerClicked === self.boardSquareList[8].playerClicked)){
       console.log("somebody won a column");
    }
    else {
      console.log("fix your column check");
    }
  }

  function diagonalCheck(){
    if(
    // checks left to right diagonal 
      (self.boardSquareList[0].playerClicked === self.boardSquareList[4].playerClicked) && 
      (self.boardSquareList[4].playerClicked === self.boardSquareList[8].playerClicked) ||
      // checks right to left diagonal 
      (self.boardSquareList[2].playerClicked === self.boardSquareList[4].playerClicked) && 
      (self.boardSquareList[4].playerClicked === self.boardSquareList[6].playerClicked)){
    console.log("somebody won a diagonal");
    }

    else{
      console.log("fix your diagonal check");
    }
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


      // function rowCheck(){
      //   if boardSquareList[i]
      // }

      // function columnCheck(){

      // }

      // function diagonalCheck(){

      // }

  }


  // }


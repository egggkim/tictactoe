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

  // self.gameBoard     = getBoardSquareList();
  self.playerTurn       = playerTurn;
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

    if (self.boardSquareList[$index].playerClicked === " "){

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
    checkDiagonals();
  }

  // function clearBoard(){
  //   self.boardSquareList  = [
  //   {playerClicked: " "},
  //   {playerClicked: " "},
  //   {playerClicked: " "},

  //   {playerClicked: " "},
  //   {playerClicked: " "},
  //   {playerClicked: " "},

  //   {playerClicked: " "},
  //   {playerClicked: " "},
  //   {playerClicked: " "}
  // ];
  // }

  function checkWin(index1, index2, index3){
    var arr          = self.boardSquareList;
    var letter1      = "x";
    var letter2      = "o";
    var line         = arr[index1].playerClicked + arr[index2].playerClicked + arr[index3].playerClicked;
    var xWinScenario = (line === letter1 + letter1 + letter1);
    var oWinScenario = (line === letter2 + letter2 + letter2);

    if (xWinScenario){
      console.log(letter1 + " won");
      self.winningMessage = letter1 + " won";
      // clearBoard();
      }


    else if (oWinScenario){
      console.log(letter2 +" won");
      self.winningMessage = letter2 + " won";
      // clearBoard();     
    }

    // else if (){
    //   self.winningMessage = "Cat's game";
    // }

  }

  function checkRows(){
    checkWin(0, 1, 2);
    checkWin(3, 4, 5);
    checkWin(6, 7, 8);
  }

  function checkColumns(){
    checkWin(0, 3, 6);
    checkWin(1, 4, 7);
    checkWin(2, 5, 8);
  }

  function checkDiagonals(){
    checkWin(0, 4, 8);
    checkWin(2, 4, 6);
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

      // function checkDiagonals(){

      // }

  }


  // }


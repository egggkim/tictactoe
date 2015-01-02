angular
  .module("tttApp")
  .controller("tttsController", tttsController);

tttsController.$inject = ['$firebase'];

function tttsController($firebase){

  var self = this;

  self.scoreBoard      = {xWins: 0, oWins: 0, ties : 0};
  self.winningMessage  = " ";
  self.boardSquareList = [
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
  self.playersList    = getPlayersList();
  self.addPlayer      = addPlayer;
  self.playerTurn     = playerTurn;
  self.currentPlayer  = 1;
  self.clickCount     = 0;
  self.clearBoard     = clearBoard; 

  // connection to firebase, loads gameboard to browser
  function getBoardSquareList(){
    var ref                   = new Firebase("https://tic--tac--toe.firebaseio.com/");
    self.game                 = $firebase(ref).$asObject();
    self.game.boardSquareList = self.boardSquareList;
    self.game.$save();
  }

  // connection to firebase, loads player object 
  function getPlayersList(){
    var ref = new Firebase("https://tic--tac--toe.firebaseio.com/players");
    var users = $firebase(ref).$asArray();

    return users;
  }

  // needs to be fixed. currently does NOTHING! 
  function addPlayer(newUser){
    self.playersList.$add(newUser);
    self.newUser = null;
  }

  // called when any player clicks game-board 
  function playerTurn($index){

    if (self.boardSquareList[$index].playerClicked === " "){

      // toggles player turn between 1 and 2 and their respective markers 
      if (self.currentPlayer === 1){
        self.boardSquareList[$index].playerClicked = "x";
        self.currentPlayer = 2;
        self.clickCount++;
      }

      else {
        self.boardSquareList[$index].playerClicked = "o";
        self.currentPlayer = 1;
        self.clickCount++;
      }
      
    }
    // invoke the following function on each game-board click 
    checkResults();
  }

  // references all the data that will be used in three win logic functions below 
  function checkWin(index1, index2, index3){
    var arr          = self.boardSquareList;
    var letter1      = "x";
    var letter2      = "o";
    var line         = arr[index1].playerClicked + arr[index2].playerClicked + arr[index3].playerClicked;
    var xWin = (line === letter1 + letter1 + letter1);
    var oWin = (line === letter2 + letter2 + letter2);

    if (xWin){
      self.winningMessage = letter1 + " wins!";
      self.scoreBoard.xWins++;
    }

    else if (oWin){
      self.winningMessage = letter2 + " wins!";
      self.scoreBoard.oWins++;
    }

    else {
      if (self.clickCount === 9){
        checkCats();
      }
    }

  }

  function checkResults(){
    // checks rows for wins
    checkWin(0, 1, 2);
    checkWin(3, 4, 5);
    checkWin(6, 7, 8);

    // checks columns for wins
    checkWin(0, 3, 6);
    checkWin(1, 4, 7);
    checkWin(2, 5, 8);

    // checks diagonals for wins
    checkWin(0, 4, 8);
    checkWin(2, 4, 6);
  }

  // resets win message, click count, and game board to original states 
  function clearBoard(){
    for (var i = 0; i < self.boardSquareList.length; i++){
      self.boardSquareList[i].playerClicked = " ";
      self.winningMessage = " ";
      self.clickCount = 0;
    }
  }

  function checkCats(){
    self.winningMessage = "tie game!";
    self.scoreBoard.ties += 1;
  }
}

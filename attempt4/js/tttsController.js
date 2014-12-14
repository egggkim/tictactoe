angular
  .module("tttApp")
  .controller("tttsController", tttsController);

tttsController.$inject = ['$firebase'];

function tttsController($firebase){

  var ref  = new Firebase("https://tic--tac--toe.firebaseio.com/");
  var self = this;

  self.winningMessage   = " ";
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
  self.playerTurn    = playerTurn;
  self.currentPlayer = 1;
  self.clearBoard    = clearBoard; 

  function getBoardSquareList(){
    self.game                 = $firebase(ref).$asObject();
    self.game.boardSquareList = self.boardSquareList;
    self.game.$save();
  }

  // called when any player clicks game-board 
  function playerTurn($index){

    if (self.boardSquareList[$index].playerClicked === " "){

      // toggles player turn between 1 and 2 and their respective markers 
      if (self.currentPlayer === 1){
        self.boardSquareList[$index].playerClicked = "x";
        self.currentPlayer = 2;
      }

      else {
        self.boardSquareList[$index].playerClicked = "o";
        self.currentPlayer = 1;
      }
      
    }

    // invoke the following functions on each game-board click 
    getBoardSquareList();
    checkRows();
    checkColumns();
    checkDiagonals();
    // everyTest();
  }

  // references all the data that will be used in three win logic functions below 
  function checkWin(index1, index2, index3){
    var arr          = self.boardSquareList;
    var letter1      = "x";
    var letter2      = "o";
    var line         = arr[index1].playerClicked + arr[index2].playerClicked + arr[index3].playerClicked;
    var xWinScenario = (line === letter1 + letter1 + letter1);
    var oWinScenario = (line === letter2 + letter2 + letter2);

    if (xWinScenario){
      self.winningMessage = letter1 + " won";
      }

    else if (oWinScenario){
      self.winningMessage = letter2 + " won";
    }

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

  function checkCats(){
    console.log("checking cats")
  }

  // function checkPuppies(){
  //   for (var i = 0; i < self.boardSquareList.length; i++){
  //     if (self.boardSquareList[i].playerclicked != " " && !xWinScenario && !oWinScenario){
  //     self.winningMessage = "puppy's game";
  //     }
  //   }
  // }

  function clearBoard(){
    for (var i = 0; i < self.boardSquareList.length; i++){
    self.boardSquareList[i].playerClicked = " ";
    self.winningMessage = " ";
    }
  }

  var ref = new Firebase("https://tic--tac--toe.firebaseio.com/players");
  var playersRef = ref.child("players");
    playersRef.set({
    player1: {
      username: "null",
    },
    player2: {
      username: "undefined",
    }
  });


  // function addPlayer(newPlayerObj){
  //   self.boardSquareList.$add(newPlayerObj);
  //   self.newPlayer = null;
  // }

  // function getChatLog() {
  //   // var presidents = [
  //   //   {name: "George Washington"},
  //   //   {name: "Thomas Jefferson"},
  //   //   {name: "Daniel Willhelm"}
  //   // ]

  //   var ref = new Firebase("https://gov.firebaseio.com/chat"); 
  //   var chat = $firebase(ref).$asArray();
  //   // above, $firebase refers to the library we linked in index.html and passes in the url to our firebase created link and passing it as a method $asArray (this is provided in angularfire)
  //   return chat;
  // }

  // function addMessage(newMessage) {
  //   this.messageList.$add(newMessage);
  //   this.newMessage = null;

  // }

  }




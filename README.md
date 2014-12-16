tictactoe updated 12/16/14
==========================
Project one, demo day Monday, December 15, 2014. 

## CORE REQUIREMENTS
Make sure to do all of the following with your app.

* Render a game board in the browser
* Switch turns between X and O (or whichever markers you select)
* Declare a winner if a player gets three in a row, cat's game if neither does
* Allow for two players to compete on separate devices

## CHALLENGE ADD-ONS
These are for extra credit! Don't focus on these until you've hit the core requirements.

* Display a "waiting..." message while users are waiting to be matched
* Keep track of multiple game rounds with a win counter
* Allow players to choose a name or icon instead of "Player 1" or X/O
* Get inventive with your styling -- use hover effects or animations to spiff things up
* Add "tableside" chat to your game

## CURRENTLY FUNCTIONAL  
* Game logic: 
	* Turns toggle between player 1 and player 2
	* Click count function to keep track of total number of turns 
	* Winning message alerts when player 1 or player 2 wins a row, column, or diagonal
	* Cats game message alerts on tie (for related errors: see below)
	* Clear board function to restart game 

## CURRENT ISSUES  
* Cats game score increments by 8 instead of 1 
	* Also alerts tie game if player wins a row on the last selectable tile 
* Firebase connectivity no longer functional (previous git pushes include a board that syncs, need to refer back to that)
* Player objects were not recognized by Firebase - subsequently removed from my code and no longer exists ):  
* Need to prevent tiles from being clicked after game has been won or cats game
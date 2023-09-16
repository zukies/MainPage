# thePigGame
This game works, with one small bug, when the winner is announced the loser remains active, but click on roll dice again and the loser becomes inactive, the game can still be restarted with no problem by clicking "new game"

////////What do I understand what's needed for the project//////////

// -There's 3 buttons which are clicked, one to roll dice, one to reset the game and one to stop the score counting and add accumulated score to main score and let next player roll the dice
// -The winner is determined by the first person to reach 1000 points
// -How to swap from one picture to another within JS

////////////////Making smaller problems from one big one////////////

// -Create the random number feature with numbers 1-6 to roll the dice
// -Create conditional logic with terniary operator so if the random number is 1 then the temporary score is reset to 0, otherwise add whatever the random number is to the current temporary score until the "hold" button is clicked
// -Show the picture of dice number which corresponds to the random number given
// -Once the hold button is clicked the rolling of dice is then given to the next player and temporary score is added to main score
// -Create a function that adds random number to current score
// -Once the main score reaches at least 1000 the game stops and the player with that score is the winner

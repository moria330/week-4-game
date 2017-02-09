/*Crystal Game
create score variable
generate a random target score between 19 - 120
create a random value for each individual crystal between 1-12
onclick of a crystal add value to playerscore and display new score
if the player reaches the target score the game ends with a win
if the player score goes over the target score the player loses
if win increase win counter by 1
if lose increase loss counter by 1
if win or lose reset game to play
on reset reset playerScore 
generate new targetScore
asign new values to the images
clear player score displayed
*/

var playerScore = 0;
var targetScore = Math.round(Math.random() * (120 - 19)) + 19;
var crystalValue = Math.round(Math.random() * (12 - 1)) + 1;
var win = 0;
var lose = 0;

$(document).ready(function(){

	//Generate Target score
	$('#target-score').html('<h1>' + targetScore + '</h1>');

	//Display Player score
	$('#player-score').html('<h1>' + playerScore + '</h1>');

	//Player win condition
	if (playerScore === targetScore) {
		win++;
		$('wins').text("Wins: " + win);
		alert("You won!")
		reset();
	} 
	//Player lose conditon
	else if (playerScore > targetScore) {
		lose++;
		$('lose').text("Losses: " + lose);
		alert("You lost. Try again.");
		reset();
	}

//reset the game	
function reset(){
	$('#player-score').empty();
	var playerScore = 0;
	var targetScore = Math.round(Math.random() * (120 - 19)) + 19;
	var crystalValue = Math.round(Math.random() * (12 - 1)) + 1;
}

});
for (var i = 1; i < 5; i++) {
	$('#crystal-image').attr("value", crystalValue);
}
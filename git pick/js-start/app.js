/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var scrores,roundScore,activePlayer;

scrores= [0,0];
roundScore= 0;
activePlayer=0;

dice = Math.floor(Math.random()*6) + 1;
document.getElementById("score-1").textContent= 0;
document.getElementById("current-0").textContent= 0;
document.getElementById("score-0").textContent= 0;
document.getElementById("current-1").textContent= 0;

document.querySelector('.btn-roll').addEventListener('click',function (){
  var dice= Math.floor(Math.random()*6) + 1;
  //display the result 
  var diceDOM = document.querySelector('.dice');
  diceDOM.style.display= 'block';
  diceDOM.src= 'dice-'+ dice +'.png';
  if(dice !== 1) {
      roundScore+=dice; 
      document.querySelector("#current-" + activePlayer).textContent = roundScore;
  }
  else {
 activePlayer=== 0?activePlayer=1:activePlayer=0;
 roundScore=0;
 document.getElementById('current-0').textContent= '0';
 document.getElementById('current-1').textContent= '0';
 document.querySelector('.player-0-panel').classList.toggle('active');
 document.querySelector('.player-1-panel').classList.toggle('active');
  }
});
document.querySelector('.btn-hold').addEventListener('click',function (){
//add the current score to the global score 
  scores[activePlayer]+=roundScore;
//upadte the ui 
document.querySelector('#score-'+ activePlayer).textContent = scrores[activePlayer];
//check if the player won the game 
}) 
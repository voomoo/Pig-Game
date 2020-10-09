/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/
var diceDOM, playerScore, playerCurrentScore, activePlayer;
playerScore = [0, 0];
playerCurrentScore = [0, 0];
activePlayer = 0;

document.getElementById('score-0').textContent = playerScore[0];
document.getElementById('score-1').textContent = playerScore[1];
document.getElementById('current-0').textContent = playerCurrentScore[0];
document.getElementById('current-1').textContent = playerCurrentScore[1];



diceDOM = document.querySelector('.dice');

diceDOM.style.display = 'none';

document.querySelector('.btn-roll').addEventListener('click', function () {
   
    var dice = Math.floor(Math.random() * 6) + 1;
    diceDOM.style.display = 'block';
    diceDOM.src = 'dice-' + dice + '.png';
    playerCurrentScore[activePlayer] = playerCurrentScore[activePlayer] + dice;
    if (dice === 1 && activePlayer === 0) {
        playerCurrentScore[activePlayer] = 0;
        activePlayer = 1;
        document.querySelector('.player-0-panel').classList.remove('active');
        document.querySelector('.player-1-panel').classList.add('active');
    } else if (dice === 1 && activePlayer === 1) {
        playerCurrentScore[activePlayer] = 0;
        activePlayer = 0;
        document.querySelector('.player-1-panel').classList.remove('active');
        document.querySelector('.player-0-panel').classList.add('active');
    }
    console.log(playerCurrentScore[activePlayer]);
    
    document.getElementById('current-0').textContent = playerCurrentScore[0];
    document.getElementById('current-1').textContent = playerCurrentScore[1];
});

document.querySelector('.btn-hold').addEventListener('click', function () {
    playerScore[activePlayer] += playerCurrentScore[activePlayer];
    if (playerScore[activePlayer] >= 100) {
        document.getElementById('name-' + activePlayer).textContent = 'Winner!';
    }
    playerCurrentScore[activePlayer] = 0;
    activePlayer = activePlayer === 0 ? 1 : 0;
    document.getElementById('score-0').textContent = playerScore[0];
    document.getElementById('score-1').textContent = playerScore[1];
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-' +activePlayer + '-panel').classList.add('active');
});

document.querySelector('.btn-new').addEventListener('click', function () {
    playerScore = [0, 0];
    playerCurrentScore = [0, 0];
    activePlayer = 0;

    document.getElementById('score-0').textContent = playerScore[0];
    document.getElementById('score-1').textContent = playerScore[1];
    document.getElementById('current-0').textContent = playerCurrentScore[0];
    document.getElementById('current-1').textContent = playerCurrentScore[1];
    document.querySelector('.player-0-panel').classList.remove('active');
    document.querySelector('.player-1-panel').classList.remove('active');
    document.querySelector('.player-' +activePlayer + '-panel').classList.add('active');
    

});
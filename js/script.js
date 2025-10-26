// Score
let playerWins = 0;
let computerWins = 0;

function updateScore() {
    document.getElementById('result').textContent =`${playerWins} - ${computerWins}`;
}
//Main game
function playGame(playerInput) {
    clearMessages();

// computer 
    let randomNumber = Math.floor(Math.random() * 3 + 1);
    console.log('Wylosowana liczba to: ' + randomNumber);
    let computerMove = getMoveName(randomNumber);
    printMessage('Mój ruch to: ' + computerMove);
// player 
    console.log('Gracz wpisał: ' + playerInput);
    let playerMove = getMoveName(playerInput);
    printMessage('Twój ruch to: ' + playerMove); 
// Result
    const outcome = displayResult (computerMove, playerMove);
// Scoreboard
    if (outcome === 'player') {
        playerWins++;
    } else if (outcome === 'computer') {
        computerWins++;
    }
    updateScore();
}
document.getElementById('play-rock').addEventListener('click', function(){
    playGame(1);
});

document.getElementById('play-paper').addEventListener('click', function(){
    playGame(2);
});
document.getElementById('play-scissors').addEventListener('click', function(){
    playGame(3);
});





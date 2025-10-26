function getMoveName(argMoveId){
  if(argMoveId == 1){
    return 'kamień';
  } else if(argMoveId == 2){
	return 'papier';
  } else if(argMoveId == 3){
	return 'nożyce';
  }
  else {
    printMessage('Nie znam ruchu o id ' + argMoveId + '.');
    return 'nieznany ruch';
  }
}

function displayResult(argComputerMove, argPlayerMove){
console.log('test:', argComputerMove, argPlayerMove);
  printMessage('Zagrałem ' + argComputerMove + ', a Ty ' + argPlayerMove);

  if (argComputerMove == 'kamień' && argPlayerMove == 'papier'){
    printMessage('Ty wygrywasz!');
    return 'player';
} else if (argComputerMove == 'papier' && argPlayerMove == 'kamień') {
    printMessage('Komputer wygrywa!');
    return 'computer';
} else if (argComputerMove == 'papier' && argPlayerMove == 'nożyce'){
    printMessage('Ty wygrywasz!');
    return 'player';
} else if (argComputerMove == 'nożyce' && argPlayerMove == 'papier'){
    printMessage('Komputer wygrywa!');
    return 'computer';
} else if (argComputerMove == 'kamień' && argPlayerMove == 'nożyce'){
    printMessage('Komputer wygrywa!');
    return 'computer';
} else if (argComputerMove == 'nożyce' && argPlayerMove == 'kamień'){
    printMessage('Ty wygrywasz!');
    return 'player';
} else if (argComputerMove == argPlayerMove){
    printMessage('Remis !');
    return 'draw';
} else if (argPlayerMove == 'nieznany ruch'){
    printMessage('Oh Ty oszuście!')
    return 'invalid';
}
}


function printMessage(msg){
	let div = document.createElement('div');
	div.innerHTML = msg;
	document.getElementById('messages').appendChild(div);
}

function clearMessages(){
	document.getElementById('messages').innerHTML = '';
}

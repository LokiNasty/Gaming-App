const { reset } = require("nodemon");

let currentPlayer = 'X';
let board= [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];

function makeMove(row, col) {
    if(board[row][col] === '') {
        document.getElementById('board').children[row * 3 + col].innerText = currentPlayer;

        if (checkinner()){
            alert(currentPlayer + ' wins!');
            resetGame();
        } else if (boardIsFull){
            alert('It\'s a draw!');
            resetGame();
        } else {
            currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
        }
    }
}

function checkWinner() {
    for (let i = 0; i < 3; i++){
        if(board[i][0] === currentPlayer && gameboards[i][1] === currentPlayer && gameboards[i][2] === currentPlayer) {
            return true;
        }
    }
}

function checkWinner() {
    for (let j = 0; i < 3; j++){
        if(board[0][j] === currentPlayer && gameboards[1][j] === currentPlayer && gameboards[2][j] === currentPlayer) {
            return true;
        }
    }

    if ((board[0][0] === currentPlayer && board[1][1] === currentPlayer && board[2][2] === currentPlayer) ||
        (board[0][2] === currentPlayer && board[1][1] === currentPlayer && board[2][0] === currentPlayer)) {
      return true;
    }
 
    return false;
}

  function boardIsFull() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (board[i][j] === '') {
          return false;
        }
      }
    }
    return true;
  }
 
  function resetGame() {
    currentPlayer = 'X';
    board = [
      ['', '', ''],
      ['', '', ''],
      ['', '', '']
    ];
 
    // Clear the board display
    const buttons = document.getElementById('board').getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
      buttons[i].innerText = '';
    }
  }
const players=[
    {
        'name': 'Player 1',
        'player':'1',
        'symbol': "X"
    },
    {
        'name': 'Player 2',
        'player':'2',
        'symbol': "O"
    }
];

let currentPlayer = players[0].symbol;
let board = [
    ['', '', ''],
    ['', '', ''],
    ['', '', '']
];
let playerScores = {
  'X': 0,
  'O': 0
};

function makeMove(row, col) {
  let button = document.getElementById('board').querySelector(`.row-${row} .option-${col}`);
  
  if (board[row][col] === '') {
      board[row][col] = currentPlayer;
      button.innerText = currentPlayer;

      if (checkWinner()) {
        playerScores[currentPlayer]++;
        updateScoreboard();
          alert(currentPlayer + ' wins!');
          resetGame();
      } else if (boardIsFull()) {   
          alert('It\'s a draw!');
          resetGame();
      } else {
          currentPlayer = currentPlayer === 'X' ? 'O' : 'X';
      }
  }
}

function updateScoreboard() {
    document.getElementById('player1Score').innerText = `Player 1 (X): ${playerScores['X']}`;
    document.getElementById('player2Score').innerText = `Player 2 (O): ${playerScores['O']}`;
}
function checkWinner() {
    for (let i = 0; i < 3; i++) {
        if (board[i][0] === currentPlayer && board[i][1] === currentPlayer && board[i][2] === currentPlayer) {
            return true;
        }
        if (board[0][i] === currentPlayer && board[1][i] === currentPlayer && board[2][i] === currentPlayer) {
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
updateScoreboard();
    // Clear the board display
    const buttons = document.getElementById('board').getElementsByTagName('button');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].innerText = '';
    }
}

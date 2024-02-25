// let currentPlayer = 'O';
// let board2 = [
//     ['', '', ''],
//     ['', '', ''],
//     ['', '', '']
// ];

// function makeMove(row, col) {
//   let button = document.getElementById('board2').querySelector(`.row-${row} .option-${col}`);
  
//   if (board2[row][col] === '') {
//       board2[row][col] = currentPlayer;
//       button.innerText = currentPlayer;

//       if (checkWinner()) {
//           alert(currentPlayer + ' wins!');
//           resetGame();
//       } else if (board2IsFull()) {
//           alert('It\'s a draw!');
//           resetGame();
//       } else {
//           currentPlayer = currentPlayer === 'O' ? 'X' : 'O';
//       }
//   }
// }


// function checkWinner() {
//     for (let i = 0; i < 3; i++) {
//         if (board2[i][0] === currentPlayer && board2[i][1] === currentPlayer && board2[i][2] === currentPlayer) {
//             return true;
//         }
//         if (board2[0][i] === currentPlayer && board2[1][i] === currentPlayer && board2[2][i] === currentPlayer) {
//             return true;
//         }
//     }

//     if ((board2[0][0] === currentPlayer && board2[1][1] === currentPlayer && board2[2][2] === currentPlayer) ||
//         (board2[0][2] === currentPlayer && board2[1][1] === currentPlayer && board2[2][0] === currentPlayer)) {
//         return true;
//     }

//     return false;
// }

// function board2IsFull() {
//     for (let i = 0; i < 3; i++) {
//         for (let j = 0; j < 3; j++) {
//             if (board2[i][j] === '') {
//                 return false;
//             }
//         }
//     }
//     return true;
// }

// function resetGame() {
//     currentPlayer = 'O';
//     board2 = [
//         ['', '', ''],
//         ['', '', ''],
//         ['', '', '']
//     ];

//     // Clear the board2 display
//     const buttons = document.getElementById('board2').getElementsByTagName('button');
//     for (let i = 0; i < buttons.length; i++) {
//         buttons[i].innerText = '';
//     }
// }

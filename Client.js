
const socket = io();

// Handle click event on game board buttons
document.querySelectorAll('.option').forEach((button, index) => {
    button.addEventListener('click', () => {
        // Get row and column from button index or any other method
        const row = Math.floor(index / 3);
        const col = index % 3;
        // Emit makeMove event with row and column
        socket.emit('makeMove', row, col);
    });
});

// Listen for moveMade event from server
socket.on('moveMade', (row, col) => {
    // Update game board UI with opponent's move
    const index = row * 3 + col;
    document.querySelectorAll('.option')[index].innerText = 'O'; // or 'X' depending on the player
});

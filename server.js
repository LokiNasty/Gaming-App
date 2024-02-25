const express = require ('express');
const http = require ('http');
const socketIO = require ('socket.io');

const app = express();
const server = http.createServer(app);
const io = socketIO(server);

const PORT = process.env.PORT || 3000;

app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(__dirname + 'index.html');
});

socket.on('makeMove', (data) =>{
    io.to(data.makeMove).emit('moveMade', data);
});

socket.on('disconnect', () => {
    console.log('A user has disconnected')
});

server.listen(PORT, () => {
    console.log('Server is running on port ${PORT}')
});
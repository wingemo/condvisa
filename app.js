const express = require('express');
const app = express();
const http = require('http');
const server = http.createServer(app);
const { Server } = require("socket.io");
const io = new Server(server);

io.on('connection', (socket) => {
    socket.on('connect', (data) => {
        socket.io.engine.id = data.id;
    });
    socket.on('disconnect', () => {
        console.log('user disconnected');
    });
    socket.on('send', (data) => {
        socket.to(data.id).emit(data.msg);
    });
    socket.on('acknowledge', (data) => {
        socket.to(data.id).emit(data.msg);
    });
});

server.listen(3000, () => {
  console.log('listening on *:3000');
});

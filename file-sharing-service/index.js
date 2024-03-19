import express from 'express';
import {Server} from 'socket.io';
import cors from 'cors';
import { createServer } from 'http';

const app = express();

app.use(cors());
app.use(express.json());
const server = createServer(app);

const io = new Server(server);
const PORT = process.env.PORT || 3000;

server.listen(PORT, (req, res) => {
    console.log("Server listening on the PORT", PORT);
});

let onlineUsers = [];

io.on('connection', (socket) => {
    console.log("socket Id", socket.id);
    socket.on("adduser", (userId) => {
        !onlineUsers.some(user => user.userId === userId) &&
        onlineUsers.push({
            userId,
            socketId: socket.id,
        });
        console.log("onlineUsers",onlineUsers);
    });


    socket.on("disconnect", () => {
        onlineUsers = onlineUsers.filter((user) => user.socketId !== socket.id);
    });
})


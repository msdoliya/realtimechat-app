import { Server } from 'socket.io';

const io = new Server(9000, {
    cors: {
        origin: 'http://localhost:3000',
    }, 
})


let users = [];

const addUser = (userData, socketId) => {
    !users.some(user => user.sub === userData.sub) && users.push({ ...userData, socketId });
}

const removeUser = (socketId) => {
    users = users.filter(user => user.socketId !== socketId);
}

const getUser = (userId) => {
    return users.find(user => user.sub === userId);
}

io.on('connection',  (socket) => {
    console.log('user connected')

    //connect
    socket.on("addusers", userData => {
        addUser(userData, socket.id);
        io.emit("getusers", users);
    })

    //send message
    socket.on('sendmessage', (data) => {
        console.log(data)
        const user = getUser(data.receiverId);
        console.log(user)
        io.to(user.socketId).emit('getmessage', data)
        console.log('get messages ')
    })

    //disconnect
    socket.on('disconnect', () => {
        console.log('user disconnected');
        removeUser(socket.id);
        io.emit('getUsers', users);
    })
})

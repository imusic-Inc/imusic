const dotenv = require('dotenv')
const mongoose = require('mongoose') //for manipulating our mongodb
const socketio = require('socket.io')

dotenv.config({ path: './config.env' }) // retrieving protected variables from config file
const app = require('./app')

const PORT = process.env.PORT || 3000;
const server = require('http').createServer(app);
//const sessionModel = require('./models/sessionRoom');

const io = socketio(server, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});




const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }).then(() => console.log('DB connection successfully')) //.catch(err => console.log('error'))



// // Sockets
// const socketUserMap = {};

// io.on('connection', (socket) => {
//     console.log('New connection', socket.id);
//     socket.on(ACTIONS.JOIN, ({ roomId, user }) => {
//         socketUserMap[socket.id] = user;
//         const clients = Array.from(io.sockets.adapter.rooms.get(roomId) || []);
//         clients.forEach((clientId) => {
//             io.to(clientId).emit(ACTIONS.ADD_PEER, {
//                 peerId: socket.id,
//                 createOffer: false,
//                 user,
//             });
//             socket.emit(ACTIONS.ADD_PEER, {
//                 peerId: clientId,
//                 createOffer: true,
//                 user: socketUserMap[clientId],
//             });
//         });
//         socket.join(roomId);
//     });


//     const leaveRoom = () => {
//         const { rooms } = socket;
//         Array.from(rooms).forEach((roomId) => {
//             const clients = Array.from(
//                 io.sockets.adapter.rooms.get(roomId) || []
//             );
//             clients.forEach((clientId) => {
//                 io.to(clientId).emit(ACTIONS.REMOVE_PEER, {
//                     peerId: socket.id,
//                     userId: socketUserMap[socket.id]?.id,
//                 });

//                 // socket.emit(ACTIONS.REMOVE_PEER, {
//                 //     peerId: clientId,
//                 //     userId: socketUserMap[clientId]?.id,
//                 // });
//             });
//             socket.leave(roomId);
//         });
//         delete socketUserMap[socket.id];
//     };

//     socket.on(ACTIONS.LEAVE, leaveRoom);

//     socket.on('disconnecting', leaveRoom);
// });




//Start Server
server.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`)
});
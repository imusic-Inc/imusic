const dotenv = require('dotenv')
const mongoose = require('mongoose') //for manipulating our mongodb
const socketio = require('socket.io')

dotenv.config({ path: './config.env' }) // retrieving protected variables from config file
const app = require('./app')

const PORT = process.env.PORT || 3000;
const http = require('http').createServer(app);
const sessionModel = require('./models/session');

const io = socketio(http, {
    cors: {
        origin: "http://localhost:3000",
        methods: ["GET", "POST"]
    }
});

io.on('connection', (socket) => {
    console.log(socket.id);
    sessionModel.find().then(result => {
        socket.emit('output-rooms', result)

    })

    socket.on('create-room', (name, description, genres, private) => {
        const sessionModel = new sessionModel({ name, description, genres, private });
        sessionModel.save().then(result => {
            io.emit('room-created', result)
        })
    })

    socket.on('join', ({ name, room_id, user_id }) => {
            const { error, user } = addUser({
                socket_id: socket.id,
                name,
                room_id,
                user_id
            })
            socket.join(room_id);
            if (error) {
                console.log('join error', error)
            } else {
                console.log('join user', user)
            }
        })
        // socket.on('sendMessage', (message, room_id, callback) => {
        //     const user = getUser(socket.id);
        //     const msgToStore = {
        //         name: user.name,
        //         user_id: user.user_id,
        //         room_id,
        //         text: message
        //     }
        //     console.log('message', msgToStore)
        //     const msg = new Message(msgToStore);
        //     msg.save().then(result => {
        //         io.to(room_id).emit('message', result);
        //         callback()
        //     })

    // })
    // socket.on('get-messages-history', room_id => {
    //     Message.find({ room_id }).then(result => {
    //         socket.emit('output-messages', result)
    //     })
    // })
    socket.on('disconnect', () => {
        //const user = removeUser(socket.id);
    })
});


const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }).then(() => console.log('DB connection successfully')) //.catch(err => console.log('error'))







//Start Server
http.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`)
});
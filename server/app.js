const express = require("express");
const app = express();

const sessionRouter = require("./routes/roomSessionRouter");
const userRouter = require('./routes/userRoutes');
const messagesRouter = require('./routes/messageRoutes');
const spotifyAuth = require('./routes/spotifyAuthRoute');
const conversationRouter = require('./routes/conversationRoute')
const privateMessageRouter = require('./routes/privateMessageRoute')
const inviteRouter = require('./routes/invitationRoute');
const notificationRouter = require('./routes/notificationRoutes')


const AppError = require('./utils/appError');
const globalErrorhandler = require('./controllers/errorController');
const cookieParser = require('cookie-parser');
const monogoSanitize = require('express-mongo-sanitize');
const xss = require('xss-clean');
const hpp = require('hpp');
const bodyParser = require('body-parser');
const morgan = require("morgan");
const helmet = require('helmet');
const cors = require("cors");
const compression = require("compression")
const session = require('express-session')
const path = require('path')


app.enable('trust proxy');

//app.set('trust proxy', 1)


app.use(cookieParser());

app.use(
    session({
        // secret: process.env.SESSION_SECRET,
        secret: '06vUSNEzq1z9U476UrMEx7xIOPGYfu2m',
        resave: true,
        saveUninitialized: false,
        cookie: {
            sameSite: process.env.NODE_ENV === "production" ? 'none' : 'lax', // must be 'none' to enable cross-site delivery
            secure: process.env.NODE_ENV === "production", // must be true if sameSite='none''
        }
    })
);
// const corsOptions = {
//     origin: 'http://localhost:3000/', // frontend server address
//     credentials: true,
//     optionsSuccessStatus: 200
// }

app.use(cors());

// Set security HTTP headers
app.use(helmet());

//Development logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

// //Development logging
// if (process.env.NODE_ENV === "staging" || process.env.NODE_ENV === "production") {
//     app.use(express.static(path.join(__dirname, '/public')));

// }




app.use(express.json({ limit: '10kb' }));

//Body Parser, reading data from body into req.body
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true, limit: '50mb' }));




//Data sanitization against nosql query injection
app.use(monogoSanitize());

//Data sanitization against xss
app.use(xss());


app.use(compression())

// Prevent parameter pollution
app.use(
    hpp({
        whitelist: [
            'roomType',
            'role',
            'name',
            'description',
            'opened',
            'can_invite'
        ]
    })
);

// Test middleware
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();

    next();
});




// 3) ROUTES
app.use("/api/v1/auth", spotifyAuth)
app.use("/api/v1/session", sessionRouter)
app.use('/api/v1/users', userRouter);
app.use('/api/v1/messages', messagesRouter);
app.use('/api/v1/conversation', conversationRouter);
app.use('/api/v1/privateMessage', privateMessageRouter);
app.use('/api/v1/invite', inviteRouter);
app.use('/api/v1/notification', notificationRouter);

app.use(express.static(path.resolve(__dirname, './client/build')));
// Handle GET requests to /api route

// All other GET requests not handled before will return our React app
app.get('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../client/build', 'index.html'));
});

// app.all('*', (req, res, next) => {
//     // res.status(404).json({
//     //     status: 'fail',
//     //     message: `Can't find ${req.originalUrl} on this server`
//     // })
//     // const err = new Error(`Can't find ${req.originalUrl} on this server!`);
//     // err.status = 'fail';
//     // err.statusCode = 404;

//     next(new AppError(`Can't find ${req.originalUrl} on this server`), 404);
// });

app.use(globalErrorhandler);

module.exports = app;
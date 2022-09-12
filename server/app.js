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


// Set security HTTP headers
app.use(helmet());


const corsOptions = {
    origin: 'http://localhost:3000', // frontend server address
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));

//Development logging
if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use(express.json({ limit: '10kb' }));

//Body Parser, reading data from body into req.body
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true, limit: '10kb' }));


app.use(cookieParser());

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

app.all('*', (req, res, next) => {
    // res.status(404).json({
    //     status: 'fail',
    //     message: `Can't find ${req.originalUrl} on this server`
    // })
    // const err = new Error(`Can't find ${req.originalUrl} on this server!`);
    // err.status = 'fail';
    // err.statusCode = 404;

    next(new AppError(`Can't find ${req.originalUrl} on this server`), 404);
});

app.use(globalErrorhandler);

module.exports = app;
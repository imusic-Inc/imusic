const express = require("express");
const morgan = require("morgan");
const app = express();
const sessionRouter = require("./routes/roomSessionRouter");
const userRouter = require('./routes/userRoutes');
const messagesRouter = require('./routes/messageRoutes');
const bodyParser = require('body-parser');
const spotifyAuth = require('./routes/spotifyAuthRoute');
const conversationRouter = require('./routes/conversationRoute')
const privateMessageRouter = require('./routes/privateMessageRoute')
const inviteRouter = require('./routes/invitationRoute')
const AppError = require('./utils/appError');
const globalErrorhandler = require('./controllers/errorController');
const cookieParser = require('cookie-parser');


//Development logging
const cors = require("cors");

const corsOptions = {
    origin: 'http://localhost:3000', // frontend server address
    credentials: true,
    optionsSuccessStatus: 200
}

app.use(cors(corsOptions));


if (process.env.NODE_ENV === "development") {
    app.use(morgan("dev"));
}

app.use(express.json({ limit: '10kb' }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true, limit: '10kb' }));
app.use(cookieParser());
app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    //console.log(req.headers);
    next();
});

app.use("/api/v1/auth", spotifyAuth)
app.use("/api/v1/session", sessionRouter)
app.use('/api/v1/users', userRouter);
app.use('/api/v1/messages', messagesRouter);
app.use('/api/v1/conversation', conversationRouter);
app.use('/api/v1/privateMessage', privateMessageRouter);
app.use('/api/v1/invite', inviteRouter);

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
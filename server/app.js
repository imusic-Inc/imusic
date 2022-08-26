const express = require("express");
const morgan = require("morgan");
const app = express();
const sessionRouter = require("./routes/roomSessionRouter");
const userRouter = require('./routes/userRoutes');
const AppError = require('./utils/appError');
const globalErrorhandler = require('./controllers/errorController');
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
app.use(cors());
app.use(express.json({ limit: '10kb' }));
app.use(express.urlencoded({ extended: true, limit: '10kb' }));

app.use((req, res, next) => {
    req.requestTime = new Date().toISOString();
    //console.log(req.headers);
    next();
});


app.use("/api/v1/session", sessionRouter)
app.use('/api/v1/users', userRouter);

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
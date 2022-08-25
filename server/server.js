const dotenv = require('dotenv')
const mongoose = require('mongoose') //for manipulating our mongodb

dotenv.config({ path: './config.env' }) // retrieving protected variables from config file
const app = require('./app')

const PORT = process.env.PORT || 3000;


const DB = process.env.DATABASE.replace('<PASSWORD>', process.env.DATABASE_PASSWORD);
mongoose.connect(DB, {
        useNewUrlParser: true,
        useCreateIndex: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    }).then(() => console.log('DB connection successfully')) //.catch(err => console.log('error'))







//Start Server
const server = app.listen(PORT, () => {
    console.log(`Server Listening on port ${PORT}`)
});
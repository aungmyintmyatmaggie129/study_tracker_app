const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const morgan = require('morgan');
const subjectRouter = require('./routes/subjectRoutes');
const userRouter = require('./routes/userRoutes');
const cookieParser = require('cookie-parser');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 4000;
const MONGO_DB_URI = process.env.MONGO_DB_URI;

app.use(express.json());
app.use(cors());
app.use(morgan('dev'));
app.use(cookieParser());

mongoose.connect(MONGO_DB_URI).then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}).catch((error) => {
    console.log("Error Connection to MongoDB:", error);
})

app.use('/api/subjects', subjectRouter);
app.use('/api/users', userRouter)
app.get('/set-cookie', (req, res) => {
    res.cookie('user', 'JohnDoe', {maxAge: (60 * 60 * 24 * 5) , httpOnly: true})
    res.send('cookie set')
})

app.get('/get-cookie',( req, res) => {
    let cookie = req.cookies.user;
    res.send('cookie: ' + cookie);
})

app.get('/', (req, res) => {
    res.status(200).json({ message: "Home" });
})


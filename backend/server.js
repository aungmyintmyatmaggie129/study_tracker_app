const express = require('express');
const mongoose = require('mongoose');
const subjectRouter  = require('./routes/subjectRoutes');
require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 4000;
const MONGO_DB_URI = process.env.MONGO_DB_URI;
app.use(express.json());


mongoose.connect(MONGO_DB_URI).then(() => {
    console.log("Connected to MongoDB");

    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}`);
    })
}).catch((error) => {
    console.log("Error Connection to MongoDB:", error);
})

app.use('/api/subjects', subjectRouter);

app.get('/', (req, res) => {
    res.status(200).json({ message: "Home" });
})

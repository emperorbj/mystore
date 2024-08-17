const express = require('express');
const app = express();
const port = 3000;
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();

// middlewares
app.use(cors());
app.use(express.json());


// connection
mongoose.connect(process.env.MONGODB_CONNECTION_URI)
.then(()=>{
    console.log('Connected to MongoDB');
    app.listen(port,()=>{
        console.log(`Server is running on port ${port}`)
    })
})
.catch(()=>{
    console.log('Error connecting to MongoDB');
})
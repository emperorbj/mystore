const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require('cors');
const mongoose = require('mongoose');
require('dotenv').config();
const productRouter = require('./routes/product.route');

// middlewares
app.use(cors());
app.use(express.json());

// routes
app.use('/api/products',productRouter);


// connection
mongoose.connect(process.env.MONGODB_CONNECTION_URI)
.then(()=>{
    console.log('Connected to MongoDB');
    app.listen(PORT,()=>{
        console.log(`Server is running on PORT ${PORT}`)
    })
})
.catch(()=>{
    console.log('Error connecting to MongoDB');
})
const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const cors = require('cors');
const menuRoutes = require('./routes/menu');
const orderRoutes = require('./routes/order');

const app = express();


// CORS Configuration
const corsOptions = {
  origin: '*',
  methods: ['GET', 'POST', 'PUT', 'DELETE'],
  allowedHeaders: ['Content-Type', 'Authorization'],
  maxAge: 3600, // 1 hour
};

// Middleware
app.use(cors(corsOptions));
app.use(bodyParser.json());

// MongoDB connection
mongoose.connect('mongodb://localhost:27017/whambamburgers', { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB connected'))
  .catch(err => console.log(err));
  
// Start server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

app.get("/", (req,res)=>{
  res.send("Your api's are working properly")
})

const logRequest = (req, res, next) => {
  console.log(`Request: ${req.method} ${req.url}`);
  // console.log(`IP: ${req.ip}`);
  // console.log(`Params: ${JSON.stringify(req.params)}`);
  // console.log(`Query: ${JSON.stringify(req.query)}`);
  // console.log(`Body: ${JSON.stringify(req.body)}`);
  next();
};

app.use(logRequest);

app.use('/api/menu', menuRoutes);
app.use('/api/orders', orderRoutes);
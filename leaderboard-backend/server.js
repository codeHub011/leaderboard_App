const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv').config();

//  Create app first
const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
const userRoutes = require('./routes/userRoutes');
app.use('/api/users', userRoutes); 

// DB Connect & Start Server
mongoose.connect(process.env.MONGO_URI || 'mongodb://localhost:27017/leaderboard', {
  useNewUrlParser: true,
  useUnifiedTopology: true
}).then(() => {
  app.listen(5000, () => console.log('Server running on port 5000'));
}).catch(err => console.error(' DB connection error:', err));

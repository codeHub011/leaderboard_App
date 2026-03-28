const express = require('express');
const router = express.Router();
const User = require('../models/User');
const History = require('../models/History');

// Get all users (sorted by points)
router.get('/', async (req, res) => {
  const users = await User.find().sort({ totalPoints: -1 });
  res.json(users);
});

// Add new user
router.post('/add', async (req, res) => {
  const { name } = req.body;
  const newUser = new User({ name });
  await newUser.save();
  res.json(newUser);
});

// Claim points
router.post('/claim/:id', async (req, res) => {
  const userId = req.params.id;
  const points = Math.floor(Math.random() * 10) + 1;

  const user = await User.findById(userId);
  if (!user) return res.status(404).json({ error: 'User not found' });

  user.totalPoints += points;
  await user.save();

  const history = new History({ userId, pointsClaimed: points });
  await history.save();

  res.json({ points, totalPoints: user.totalPoints });
});

// Get claim history
router.get('/history', async (req, res) => {
  const history = await History.find().populate('userId', 'name').sort({ createdAt: -1 });
  res.json(history);
});

module.exports = router;

const express = require('express');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 5000;

// Middleware
app.use(cors());
app.use(express.json());

// Root route
app.get('/', (req, res) => {
  res.send('Intern Portal Backend is Running ✅');
});

// Intern basic info
app.get('/api/intern', (req, res) => {
  res.json({
    name: 'Kasam Rohith',
    referralCode: 'rohith2025',
    totalDonations: 5200,
  });
});

// Analytics data route
app.get('/api/analytics', (req, res) => {
  res.json({
    name: 'Kasam Rohith',
    tasksCompleted: 18,
    timeSpent: 7520, // in seconds
    currentStreak: 5, // days
    badges: ['Task Starter', 'Consistency King'],
    leaderboardPoints: 145,
    loginHistory: ['2025-07-28', '2025-07-29', '2025-07-30', '2025-08-01'],
  });
});

// POST route to receive updates
app.post('/api/analytics/update', (req, res) => {
  const updatedStats = req.body;
  console.log('📩 Received update:', updatedStats);

  // Future database logic can go here
  res.status(200).json({ message: '📊 Stats updated successfully' });
});

// Start server
app.listen(PORT, () => {
  console.log(`✅ Server running at http://localhost:${PORT}`);
});

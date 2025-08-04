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
    tasksCompleted: 22,
    timeSpent: 10820, // in seconds (~3 hrs)
    currentStreak: 6,
    leaderboardPoints: 215,
    loginHistory: ['2025-07-26', '2025-07-27', '2025-07-28', '2025-07-29', '2025-07-30', '2025-08-01'],
    badges: ['Task Starter', 'Consistency King', 'Productivity Pro', 'Night Owl'],
    recentTasks: [
      { title: 'Updated Resume', date: '2025-07-30' },
      { title: 'Completed Portal UI', date: '2025-07-29' },
      { title: 'Attended Weekly Review Meet', date: '2025-07-28' },
      { title: 'Submitted Analytics Report', date: '2025-07-27' },
    ],
    rewards: [
      { name: 'Amazon Voucher ₹200', date: '2025-07-28' },
      { name: 'Intern of the Week Badge', date: '2025-07-30' },
    ],
    favoriteTechStack: ['React', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    projectsCompleted: 3,
    totalHours: 12,
    referrals: [
      { name: 'Sai Teja', status: 'Joined' },
      { name: 'Deekshith', status: 'Pending' }
    ]
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

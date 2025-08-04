import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState(null);

  useEffect(() => {
    axios
      .get("https://intern-portal-backend-y3wl.onrender.com/api/analytics")
      .then((res) => {
        setData(res.data);
        setLoading(false);
      })
      .catch((error) => {
        setErr("Failed to load analytics.");
        setLoading(false);
      });
  }, []);

  if (loading) return <p className="text-center mt-10 text-lg">Loading Dashboard...</p>;
  if (err) return <p className="text-center mt-10 text-red-600">{err}</p>;

  return (
    <div className="min-h-screen px-4 py-6 md:px-12 lg:px-24 bg-gradient-to-br from-gray-100 to-gray-200">
      <h1 className="text-3xl font-bold mb-8 text-center text-gray-800">Dashboard</h1>

      {/* Stats Cards */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        <StatCard title="Total Logins" value={data.totalLogins} color="bg-blue-500" />
        <StatCard title="Tasks Completed" value={data.tasksCompleted} color="bg-green-500" />
        <StatCard title="Hours Spent" value={data.hoursSpent} color="bg-yellow-500" />
        <StatCard title="Leaderboard Rank" value={`#${data.leaderboardRank}`} color="bg-purple-500" />
        <StatCard title="Reward Points" value={data.rewardPoints} color="bg-pink-500" />
        <StatCard title="Streak Days" value={`${data.streakDays} 🔥`} color="bg-red-500" />
      </div>

      {/* Recent Tasks */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Recent Tasks</h2>
        {data.recentTasks && data.recentTasks.length > 0 ? (
          <ul className="space-y-2">
            {data.recentTasks.map((task, idx) => (
              <li key={idx} className="bg-white shadow p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="font-medium text-gray-800">{task.title}</span>
                  <span className="text-sm text-gray-500">{task.date}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No recent tasks available.</p>
        )}
      </div>

      {/* Calendar Events */}
      <div className="mt-12">
        <h2 className="text-xl font-semibold mb-4 text-gray-700">Calendar Events</h2>
        {data.calendarEvents && data.calendarEvents.length > 0 ? (
          <ul className="space-y-2">
            {data.calendarEvents.map((event, idx) => (
              <li key={idx} className="bg-white shadow p-4 rounded-lg">
                <div className="flex justify-between items-center">
                  <span className="text-gray-800 font-medium">{event.title}</span>
                  <span className="text-sm text-gray-500">{event.date}</span>
                </div>
              </li>
            ))}
          </ul>
        ) : (
          <p className="text-gray-500">No calendar events available.</p>
        )}
      </div>
    </div>
  );
};

// Small stat card component
const StatCard = ({ title, value, color }) => (
  <div className={`rounded-xl p-6 shadow text-white ${color}`}>
    <h3 className="text-lg font-medium">{title}</h3>
    <p className="text-2xl font-bold mt-1">{value}</p>
  </div>
);

export default Dashboard;

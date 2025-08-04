import React from "react";
import {
  PieChart,
  Pie,
  Cell,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";

const Analytics = () => {
  // Mock Data (replace with API later)
  const stats = {
    completed: 28,
    pending: 7,
    totalTasks: 35,
    xp: 1450,
    level: "Level 2",
    rewards: ["Bronze Badge", "Consistent Streak", "Early Bird"],
    nextReward: "Silver Badge",
    nextRewardIn: 5, // tasks remaining to unlock next reward
  };

  const completionRate = Math.round((stats.completed / stats.totalTasks) * 100);

  const pieData = [
    { name: "Completed", value: stats.completed },
    { name: "Pending", value: stats.pending },
  ];

  const COLORS = ["#4CAF50", "#F59E0B"]; // Green and Orange

  return (
    <div className="min-h-screen bg-[url('/study-bg.png')] bg-cover bg-center bg-no-repeat py-10 px-4">
      <div className="bg-white/80 backdrop-blur-md rounded-xl shadow-xl max-w-6xl mx-auto p-8">
        <h1 className="text-3xl font-bold text-center text-indigo-700 mb-8">
          🎯 Intern Portal Analytics Dashboard
        </h1>

        <div className="flex flex-col lg:flex-row gap-8">
          {/* Pie Chart */}
          <div className="w-full lg:w-2/3 h-[400px]">
            <ResponsiveContainer width="100%" height="100%">
              <PieChart>
                <Pie
                  data={pieData}
                  dataKey="value"
                  nameKey="name"
                  cx="50%"
                  cy="50%"
                  outerRadius={120}
                  label
                >
                  {pieData.map((entry, index) => (
                    <Cell
                      key={`cell-${index}`}
                      fill={COLORS[index % COLORS.length]}
                    />
                  ))}
                </Pie>
                <Tooltip />
                <Legend verticalAlign="bottom" />
              </PieChart>
            </ResponsiveContainer>
          </div>

          {/* Stats Summary */}
          <div className="w-full lg:w-1/3 flex flex-col gap-4 text-gray-800">
            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-semibold text-lg text-indigo-600">📊 Summary</p>
              <p>✅ <strong>Completed:</strong> {stats.completed}</p>
              <p>⏳ <strong>Pending:</strong> {stats.pending}</p>
              <p>📋 <strong>Total Tasks:</strong> {stats.totalTasks}</p>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-semibold text-lg text-indigo-600">🏅 Rewards & Progress</p>
              <p>🎖️ <strong>Rewards Won:</strong> {stats.rewards.join(", ")}</p>
              <p>🎯 <strong>Next Reward:</strong> {stats.nextReward} (in {stats.nextRewardIn} tasks)</p>
              <p>📈 <strong>Completion Rate:</strong> {completionRate}%</p>

              <div className="w-full bg-gray-200 rounded-full h-4 mt-2">
                <div
                  className="bg-green-500 h-4 rounded-full text-xs text-right pr-2 text-white"
                  style={{ width: `${completionRate}%` }}
                >
                  {completionRate}%
                </div>
              </div>
            </div>

            <div className="bg-white p-4 rounded-lg shadow">
              <p className="font-semibold text-lg text-indigo-600">🧩 User Stats</p>
              <p>⭐ <strong>XP:</strong> {stats.xp} XP</p>
              <p>🏆 <strong>Current Level:</strong> {stats.level}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Analytics;

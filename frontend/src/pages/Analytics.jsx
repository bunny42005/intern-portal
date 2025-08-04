import { useEffect, useState, useRef } from "react";
import { Chart, PieController, ArcElement, Tooltip, Legend } from "chart.js";

Chart.register(PieController, ArcElement, Tooltip, Legend);


const Analytics = () => {
  const [analyticsData, setAnalyticsData] = useState(null);
  const [loading, setLoading] = useState(true);
  const chartRef = useRef(null);
  const chartInstanceRef = useRef(null);

  useEffect(() => {
    fetch("https://intern-portal-backend-y3wl.onrender.com/api/analytics")
      .then((res) => res.json())
      .then((data) => {
        setAnalyticsData(data);
        setLoading(false);

        // Render pie chart
        if (chartRef.current) {
 {
          const ctx = chartRef.current.getContext("2d");

          // Destroy old chart if exists
          if (chartInstanceRef.current) {
            chartInstanceRef.current.destroy();
          }

          chartInstanceRef.current = new Chart(ctx, {
            type: "pie",
            data: {
              labels: ["Tasks", "Time Spent", "Points"],
              datasets: [
                {
                  label: "Analytics Summary",
                  data: [
                    data.tasksCompleted,
                    Math.floor(data.timeSpent / 60),
                    data.leaderboardPoints,
                  ],
                  backgroundColor: ["#60A5FA", "#34D399", "#FBBF24"],
                  borderWidth: 1,
                },
              ],
            },
            options: {
              responsive: true,
              plugins: {
                legend: {
                  position: "bottom",
                },
              },
            },
          });
        }
      })
      .catch((err) => {
        console.error("Error fetching analytics:", err);
        setLoading(false);
      });
  }, []);

  if (loading) return <div className="text-center">Loading analytics...</div>;

  return (
    <div className="max-w-4xl mx-auto bg-white p-6 rounded-xl shadow-lg space-y-6">
      <h2 className="text-2xl font-bold text-center mb-4">📊 Analytics Overview</h2>

      {/* Analytics Cards */}
      <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 text-center">
        <div className="bg-blue-100 rounded-lg p-4 shadow">
          <div className="text-sm">Tasks Completed</div>
          <div className="text-2xl font-bold">{analyticsData.tasksCompleted}</div>
        </div>
        <div className="bg-green-100 rounded-lg p-4 shadow">
          <div className="text-sm">Time Spent</div>
          <div className="text-2xl font-bold">{Math.floor(analyticsData.timeSpent / 60)} mins</div>
        </div>
        <div className="bg-yellow-100 rounded-lg p-4 shadow">
          <div className="text-sm">Current Streak</div>
          <div className="text-2xl font-bold">{analyticsData.currentStreak} 🔥</div>
        </div>
        <div className="bg-purple-100 rounded-lg p-4 shadow col-span-2 sm:col-span-1">
          <div className="text-sm">Points</div>
          <div className="text-2xl font-bold">{analyticsData.leaderboardPoints}</div>
        </div>
        <div className="bg-pink-100 rounded-lg p-4 shadow col-span-2 sm:col-span-2">
          <div className="text-sm">Badges</div>
          <div className="text-md font-medium">{analyticsData.badges.join(", ")}</div>
        </div>
      </div>

      {/* Login History */}
      <div className="bg-gray-100 rounded-lg p-4 shadow">
        <div className="text-sm mb-1">Login History</div>
        <ul className="text-xs space-y-1">
          {analyticsData.loginHistory.map((date, index) => (
            <li key={index}>🗓️ {date}</li>
          ))}
        </ul>
      </div>

      {/* Pie Chart */}
      <div className="mt-5 flex justify-center">
        <div className="w-60h-60">
            <h3 className="text-lg font-semibold text-center mb-2">📈 Activity Breakdown</h3>
            <canvas ref={chartRef} width={200} height={200} className="mx-auto" />

            </div>
            </div>
    </div>
  );
};

export default Analytics;

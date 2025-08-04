import React, { useState } from "react";
import CalendarWidget from "../components/CalendarWidget";

const Dashboard = () => {
  const [selectedReward, setSelectedReward] = useState(null);

  const user = {
    name: "Rohith Reddy",
    referralCode: "rohith2025",
    donationsRaised: 5200,
    goal: 10000,
    referralClicks: 36,
    leaderboardRank: 5,
    joinedDate: "2025-08-01",
    rewards: [
      { name: "T-Shirt", unlocked: true, description: "Exclusive branded T-shirt for top contributors." },
      { name: "Certificate", unlocked: false, description: "Digital certificate after completing ₹7500 in donations." },
      { name: "Spotlight Badge", unlocked: false, description: "Special badge shown on your profile once you reach ₹10000." },
    ],
  };

  const progress = (user.donationsRaised / user.goal) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-100 via-white to-indigo-200 p-6 font-inter">
      <h1 className="text-3xl font-bold mb-4">Welcome, {user.name} 👋</h1>

      {/* Referral Code */}
      <div className="bg-white shadow-md p-4 rounded-lg mb-6">
        <p className="text-lg font-semibold">Your Referral Code:</p>
        <p className="text-2xl font-bold text-indigo-600">{user.referralCode}</p>
      </div>

      {/* Donations Progress */}
      <div className="bg-white shadow-md p-4 rounded-lg mb-6">
        <p className="text-lg font-semibold mb-2">Total Donations Raised</p>
        <div className="text-2xl font-bold text-green-600 mb-2">₹{user.donationsRaised}</div>
        <div className="w-full bg-gray-200 rounded-full h-4">
          <div
            className="bg-green-500 h-4 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm mt-1 text-gray-500">{user.donationsRaised} / {user.goal}</p>
      </div>

      {/* Rewards Section */}
      <div className="bg-white shadow-md p-4 rounded-lg mb-6">
        <p className="text-lg font-semibold mb-4">Rewards / Unlockables</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {user.rewards.map((reward, index) => (
            <div
              key={index}
              onClick={() => setSelectedReward(reward)}
              className={`p-4 rounded-lg text-center cursor-pointer transition-transform hover:scale-105 ${
                reward.unlocked ? "bg-green-100 text-green-700" : "bg-gray-100 text-gray-500"
              }`}
            >
              {reward.unlocked ? "✅" : "🔒"} {reward.name}
            </div>
          ))}
        </div>
      </div>

      {/* Calendar + Stats Section */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-start">
        {/* Left - Calendar */}
        <div className="md:col-span-2">
          <CalendarWidget />
        </div>

        {/* Right - Stats Stack */}
        <div className="flex flex-col gap-4">
          <div className="bg-white shadow-md p-4 rounded-lg">
            <p className="text-lg font-semibold">Referral Clicks</p>
            <p className="text-3xl font-bold">{user.referralClicks}</p>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg">
            <p className="text-lg font-semibold">Leaderboard Rank</p>
            <p className="text-3xl font-bold">#{user.leaderboardRank}</p>
          </div>

          <div className="bg-white shadow-md p-4 rounded-lg">
            <p className="text-lg font-semibold">Internship Info</p>
            <p className="text-gray-700">Joined On: {user.joinedDate}</p>
          </div>
        </div>
      </div>

      {/* Reward Modal */}
      {selectedReward && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg p-6 max-w-sm w-full shadow-lg relative">
            <button
              onClick={() => setSelectedReward(null)}
              className="absolute top-2 right-3 text-gray-500 hover:text-red-600 text-xl font-bold"
            >
              ×
            </button>
            <h2 className="text-xl font-bold mb-2">
              {selectedReward.unlocked ? "✅" : "🔒"} {selectedReward.name}
            </h2>
            <p className="text-gray-700">{selectedReward.description}</p>
            {!selectedReward.unlocked && (
              <p className="mt-2 text-sm text-red-500 font-medium">You haven't unlocked this reward yet.</p>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Dashboard;

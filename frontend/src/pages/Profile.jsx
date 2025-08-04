import React from "react";

const Profile = () => {
  const user = {
    name: "Kasam Rohith",
    email: "rohith@example.com",
    joinedDate: "2025-08-01",
    referralCode: "rohith2025",
    referralClicks: 36,
    donationsRaised: 5200,
    goal: 10000,
    rewards: [
      { name: "T-Shirt", unlocked: true },
      { name: "Certificate", unlocked: false },
      { name: "Spotlight Badge", unlocked: true },
    ],
  };

  const progress = (user.donationsRaised / user.goal) * 100;

  return (
    <div className="min-h-screen bg-gradient-to-br from-purple-100 via-white to-indigo-100 p-6 font-inter">
      <h1 className="text-3xl font-bold mb-6">👤 Your Profile</h1>

      {/* Basic Info */}
      <div className="bg-white p-5 rounded-xl shadow-md mb-6">
        <p className="text-lg font-semibold">Name:</p>
        <p className="text-gray-800 mb-3">{user.name}</p>

        <p className="text-lg font-semibold">Email:</p>
        <p className="text-gray-800 mb-3">{user.email}</p>

        <p className="text-lg font-semibold">Joined Date:</p>
        <p className="text-gray-800">{user.joinedDate}</p>
      </div>

      {/* Referral Section */}
      <div className="bg-white p-5 rounded-xl shadow-md mb-6">
        <p className="text-lg font-semibold mb-2">Referral Code</p>
        <div className="text-indigo-600 text-2xl font-bold mb-2">
          {user.referralCode}
        </div>
        <p className="text-gray-600">Referral Clicks: {user.referralClicks}</p>
      </div>

      {/* Donation Progress */}
      <div className="bg-white p-5 rounded-xl shadow-md mb-6">
        <p className="text-lg font-semibold mb-2">Donation Progress</p>
        <div className="w-full bg-gray-200 h-4 rounded-full mb-2">
          <div
            className="h-4 bg-green-500 rounded-full"
            style={{ width: `${progress}%` }}
          ></div>
        </div>
        <p className="text-sm text-gray-600">
          ₹{user.donationsRaised} / ₹{user.goal} ({Math.round(progress)}%)
        </p>
      </div>

      {/* Rewards Section */}
      <div className="bg-white p-5 rounded-xl shadow-md mb-6">
        <p className="text-lg font-semibold mb-4">Your Rewards</p>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {user.rewards.map((reward, index) => (
            <div
              key={index}
              className={`p-4 rounded-lg text-center font-medium ${
                reward.unlocked
                  ? "bg-green-100 text-green-700"
                  : "bg-gray-100 text-gray-500"
              }`}
            >
              {reward.unlocked ? "✅" : "🔒"} {reward.name}
            </div>
          ))}
        </div>
      </div>

      {/* Future: Edit Profile */}
      {/* <button className="bg-indigo-500 text-white px-4 py-2 rounded-lg shadow-md hover:bg-indigo-600">
        Edit Profile
      </button> */}
    </div>
  );
};

export default Profile;

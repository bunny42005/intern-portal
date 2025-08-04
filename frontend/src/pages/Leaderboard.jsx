import React, { useState } from "react";

const leaderboardData = [
  { rank: 1, name: "Rohith Reddy", referralCode: "rohith2025", totalDonations: 7500, reward: "Top Contributor", institute: "CMR Engineering College" },
  { rank: 2, name: "Ananya Sharma", referralCode: "ananya2025", totalDonations: 6200, reward: "Silver Star", institute: "IIT Bombay" },
  { rank: 3, name: "Raj Mehta", referralCode: "rajm2025", totalDonations: 5800, reward: "Bronze Champ", institute: "BITS Pilani" },
  { rank: 4, name: "Sneha Das", referralCode: "sneha2025", totalDonations: 5600, reward: "Gold Badge", institute: "NIT Trichy" },
  { rank: 5, name: "Vikram Singh", referralCode: "vikram2025", totalDonations: 5300, reward: "Elite Helper", institute: "IIT Delhi" },
  { rank: 6, name: "Priya Nair", referralCode: "priya2025", totalDonations: 5000, reward: "Rising Star", institute: "IIIT Hyderabad" },
  { rank: 7, name: "Arjun Rao", referralCode: "arjun2025", totalDonations: 4700, reward: "Support Pillar", institute: "JNTU Hyderabad" },
  { rank: 8, name: "Divya K", referralCode: "divya2025", totalDonations: 4600, reward: "Solid Performer", institute: "Anna University" },
  { rank: 9, name: "Manoj Kumar", referralCode: "manoj2025", totalDonations: 4300, reward: "Core Member", institute: "VIT Vellore" },
  { rank: 10, name: "Isha Jain", referralCode: "isha2025", totalDonations: 4000, reward: "Enthusiast", institute: "SRM University" },
];

const Leaderboard = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = leaderboardData.filter((user) =>
    user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.institute.toLowerCase().includes(searchTerm.toLowerCase()) ||
    user.referralCode.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-gray-100 p-4 overflow-hidden">
      <h1 className="text-3xl font-bold text-center mb-4">🏆 Leaderboard</h1>

      {/* Search Box */}
      <div className="flex justify-center mb-6">
        <input
          type="text"
          placeholder="Search by name, referral code or institute"
          className="w-full sm:w-1/2 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-400 shadow-sm"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      {/* Scrollable Cards */}
      <div className="overflow-y-auto max-h-[75vh] px-2">
        {filteredData.length === 0 ? (
          <p className="text-center text-gray-500">No results found.</p>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 pb-6">
            {filteredData.map((user) => (
              <div
                key={user.rank}
                className="bg-white shadow-xl rounded-xl p-5 border-l-4 border-blue-500 transition-transform duration-300 transform hover:scale-105 hover:shadow-2xl"
              >
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-semibold text-gray-500">
                    Rank #{user.rank}
                  </span>
                  <span className="bg-blue-100 text-blue-700 px-3 py-1 rounded-full text-xs font-semibold">
                    {user.reward}
                  </span>
                </div>
                <h2 className="text-lg font-bold">{user.name}</h2>
                <p className="text-sm text-gray-600">{user.institute}</p>
                <p className="mt-2 text-sm text-gray-700">
                  Referral Code: <span className="font-medium">{user.referralCode}</span>
                </p>
                <p className="text-sm text-gray-700">
                  Total Donations: <span className="font-bold text-green-600">₹{user.totalDonations}</span>
                </p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default Leaderboard;

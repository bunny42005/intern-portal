import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Leaderboard from "./pages/Leaderboard";
import Login from "./pages/Login";
import Signup from "./pages/Signup";
import Analytics from "./pages/Analytics";
import Profile from "./pages/Profile";

// Reusable wrapper with background only (no navbar)
const WithBackground = ({ children }) => (
  <div className="min-h-screen bg-[url('/study-bg.png')] bg-cover bg-center bg-no-repeat">
    <div className="bg-white/70 min-h-screen">
      <main className="flex justify-center items-center min-h-screen p-4">
        {children}
      </main>
    </div>
  </div>
);

// Wrapper with background + navbar
const WithNavbar = ({ children }) => (
  <div className="min-h-screen bg-[url('/study-bg.png')] bg-cover bg-center bg-no-repeat">
    <div className="bg-white/70 min-h-screen backdrop-blur-md">
      <Navbar />
      <main className="p-4 space-y-6 max-w-6xl mx-auto">
        {children}
      </main>
    </div>
  </div>
);

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<WithBackground><Login /></WithBackground>} />
        <Route path="/signup" element={<WithBackground><Signup /></WithBackground>} />
        <Route path="/dashboard" element={<WithNavbar><Dashboard /></WithNavbar>} />
        <Route path="/leaderboard" element={<WithNavbar><Leaderboard /></WithNavbar>} />
        <Route path="/analytics" element={<WithNavbar><Analytics /></WithNavbar>} /> 
        <Route path="/profile" element={<WithNavbar><Profile /></WithNavbar>} />
      </Routes>
    </Router>
  );
}

export default App;

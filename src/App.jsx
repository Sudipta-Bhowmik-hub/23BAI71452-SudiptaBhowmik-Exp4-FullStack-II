import React, { useContext } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Game from "./pages/Game";
import Analytics from "./pages/Analytics";
import "./App.css";
import { AppContext } from "./context/AppContext";  // ✅ Import context

function App() {
  const { state } = useContext(AppContext); // ✅ Get theme from context

  return (
    <Router>
      {/* Apply theme class dynamically */}
      <div className={`app-container ${state.theme}`}>
        <nav className="navbar">
          <Link to="/" className="btn-link">Home</Link>
          <Link to="/game" className="btn-link">Game</Link>
          <Link to="/analytics" className="btn-link">Analytics</Link>
        </nav>

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/game" element={<Game />} />
          <Route path="/analytics" element={<Analytics />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

import React from "react";
import "./index.css"; 

function App() {
  return (
    <div className="w-screen h-screen bg-gradient-to-br from-orange-100 via-amber-200 to-yellow-100 flex items-center justify-center">
      <div className="text-center px-6">
        <h1 className="text-5xl font-extrabold mb-6 text-amber-700 drop-shadow-md">
          Welcome to <span className="text-amber-800">CookMate</span> 🍽️
        </h1>
        <p className="mb-6 text-lg text-amber-900 max-w-xl mx-auto">
          Plan your meals, manage your pantry, and track your budget in one place.
        </p>
        <button className="px-6 py-3 rounded-lg bg-amber-600 hover:bg-amber-500 text-white font-medium shadow-md transition">
          Get Started
        </button>
      </div>
    </div>
  );
}

export default App;

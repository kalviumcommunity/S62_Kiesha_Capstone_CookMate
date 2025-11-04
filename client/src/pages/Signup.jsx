import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

export default function Signup() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ name: '', email: '', password: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch("http://localhost:8080/auth/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await res.json();

      if (res.ok) {
        alert("Signup successful!");
        navigate('/login');
      } else {
        alert(data.message || "Signup failed");
      }
    } catch (err) {
      alert("Network error or server not responding.");
    }
  };

  return (
    <div className="min-h-screen bg-[#FEFAE0] flex items-center justify-center">
      <form onSubmit={handleSubmit} className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
        <h2 className="text-2xl font-bold text-[#5F6F52] mb-6 text-center">Sign Up</h2>
        <input
          type="text"
          name="name"
          placeholder="Name"
          value={formData.name}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-[#C38154] rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
          className="w-full p-3 mb-4 border border-[#C38154] rounded"
          required
        />
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
          className="w-full p-3 mb-6 border border-[#C38154] rounded"
          required
        />
        <button
          type="submit"
          className="w-full bg-[#9A4444] text-white py-3 rounded hover:bg-[#7c2c2c] transition"
        >
          Register
        </button>
        <p className="mt-4 text-center text-[#884A39]">
          Already have an account? <span onClick={() => navigate('/login')} className="text-[#9A4444] underline cursor-pointer">Login</span>
        </p>
      </form>
    </div>
  );
}

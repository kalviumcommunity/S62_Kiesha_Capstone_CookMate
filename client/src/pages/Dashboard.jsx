import { useNavigate } from 'react-router-dom';
import { useEffect } from 'react';

export default function Dashboard() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  useEffect(() => {
    document.title = "CookMate Dashboard";
  }, []);

  return (
    <div className="min-h-screen bg-[#FEFAE0] text-[#5F6F52] p-6">
      <header className="flex justify-between items-center mb-10">
        <h1 className="text-2xl font-bold">CookMate Dashboard</h1>
        <div className="space-x-4">
          <button onClick={() => alert("Profile Coming Soon")} className="text-[#9A4444] font-medium">Profile</button>
          <button onClick={() => alert("Saved Recipes Coming Soon")} className="text-[#9A4444] font-medium">Saved</button>
          <button onClick={() => alert("Customize Recipes Coming Soon")} className="text-[#9A4444] font-medium">Customize</button>
          <button onClick={handleLogout} className="bg-[#9A4444] text-white px-4 py-2 rounded">Logout</button>
        </div>
      </header>

      <main>
        <div className="grid md:grid-cols-2 gap-8">
          <div className="p-6 border border-[#A9B388] rounded-lg bg-[#FFF8DC] shadow">
            <h2 className="text-xl font-semibold mb-3">Update Pantry</h2>
            <p className="text-[#884A39]">Coming soon: Add and remove items from your pantry.</p>
          </div>
          <div className="p-6 border border-[#9A4444] rounded-lg bg-[#FAEBD7] shadow">
            <h2 className="text-xl font-semibold mb-3">Set Weekly Budget</h2>
            <p className="text-[#884A39]">Coming soon: Enter a weekly budget for cost-effective meal plans.</p>
          </div>
        </div>
      </main>
    </div>
  );
}

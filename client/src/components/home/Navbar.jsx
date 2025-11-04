import { useNavigate } from 'react-router-dom';

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <nav className="sticky top-0 bg-[#4B1C1C] text-[#FFEEDD] shadow-md z-50">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <div className="flex items-center space-x-2">
          <span className="text-2xl">🍳</span>
          <span className="text-xl font-bold">CookMate</span>
        </div>

        <div className="hidden md:flex space-x-6 font-medium">
          <a href="#features" className="text-[#FFEEDD] hover:text-[#FFDAB9] transition duration-200">Features</a>
          <a href="#how-it-works" className="text-[#FFEEDD] hover:text-[#FFDAB9] transition duration-200">Browse Foods</a>
          <a href="#testimonials" className="text-[#FFEEDD] hover:text-[#FFDAB9] transition duration-200">Reviews</a>
        </div>

        <button
          onClick={() => navigate('/signup')}
          className="bg-[#FFDAB9] hover:bg-[#ffc4a3] text-[#4B1C1C] px-4 py-2 rounded-full font-semibold transition duration-200"
        >
          Get Started
        </button>
      </div>
    </nav>
  );
}

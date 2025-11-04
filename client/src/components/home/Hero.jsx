import { useState } from 'react';
import HowItWorksModal from './HowItWorksModal';

export default function Hero() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <>
      <section className="relative bg-gradient-to-br from-neutral to-light py-16 md:py-24 overflow-hidden">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center relative z-10">
          <div className="md:w-1/2 mb-10 md:mb-0">
            <h1 className="text-4xl md:text-5xl font-serif font-bold text-dark mb-4">
              <span className="text-primary">Smart</span> Cooking,<br />
              <span className="text-secondary">Smarter</span> Savings
            </h1>
            <p className="text-lg text-gray-700 mb-6">
              Plan meals, manage your pantry, and track grocery spending—all in one place.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <button className="bg-primary hover:bg-secondary text-white px-6 py-3 rounded-full font-semibold transition">
                Try It Free
              </button>
              <button
                onClick={() => setIsModalOpen(true)}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white px-6 py-3 rounded-full font-semibold transition"
              >
                See How It Works
              </button>
            </div>
          </div>
          <div className="md:w-1/2">
            <img
              src="/assets/images/hero image.jpg"
              alt="CookMate App Preview"
              className="rounded-lg shadow-xl w-full max-w-md mx-auto"
            />
          </div>
        </div>
      </section>

      <HowItWorksModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </>
  );
}

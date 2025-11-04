const steps = [
  {
    number: "1",
    title: "Build Your Profile",
    desc: "Kickstart your journey by setting up a personalized profile. Choose dietary preferences, restrictions, and favorite cuisines. This ensures your meal plans match your tastes perfectly.",
    img: "/assets/images/Steps1.png",
  },
  {
    number: "2",
    title: "Add Ingredients to Your Pantry",
    desc: "Add items manually or scan receipts to stock your virtual pantry. The more ingredients you add, the better CookMate can match meals to your resources.",
    img: "/assets/images/Steps2.png",
  },
  {
    number: "3",
    title: "Set Your Weekly Budget",
    desc: "Plan smarter by entering your weekly food budget. CookMate will ensure all meal suggestions stay within your spending goals, helping you save more.",
    img: "/assets/images/Steps2.png",
  },
  {
    number: "4",
    title: "Generate Meal Plans",
    desc: "Based on your pantry and preferences, CookMate curates a weekly meal plan with recipes you’ll love—without needing a grocery run!",
    img: "/assets/images/Steps2.png",
  },
  {
    number: "5",
    title: "Customize Your Recipes",
    desc: "Don’t like mushrooms or out of cheese? No worries! Swap ingredients and personalize meals just how you like them.",
    img: "/assets/images/Steps2.png",
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-gradient-to-br from-[#FFF8F0] to-[#FEEFD6]">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl md:text-5xl font-serif font-bold text-center text-[#4B1C1C] mb-4">
          How <span className="text-primary">CookMate</span> Works
        </h2>
        <p className="text-center text-lg text-gray-700 mb-16 max-w-2xl mx-auto">
          CookMate helps you turn what's already in your kitchen into delicious, personalized meals—while sticking to your budget.
        </p>

        <div className="space-y-24">
          {steps.map((step, index) => (
            <div
              key={index}
              className={`flex flex-col md:flex-row items-center ${
                index % 2 === 1 ? "md:flex-row-reverse" : ""
              } gap-10 md:gap-16`}
            >
              {/* Step image */}
              <img
  src={step.img}
  alt={step.title}
  className="rounded-xl  max-w-[280px] md:h-56 object-contain"
/>

              {/* Text content */}
              <div className="w-full md:w-1/2 text-center md:text-left">
                <div className="mb-2">
                  <span className="text-xl font-bold text-primary">
                    Step {step.number}
                  </span>
                </div>
                <h3 className="text-2xl font-bold text-[#4B1C1C] mb-3">
                  {step.title}
                </h3>
                <p className="text-gray-700 text-lg leading-relaxed">{step.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        <div className="mt-24 text-center animate-bounce hover:animate-pulse">
          <button className="
            bg-[#4B1C1C] hover:bg-[#663333] text-white
            px-8 py-4 rounded-full text-lg font-bold
            shadow-lg hover:shadow-xl transition-all
            transform hover:scale-105
          ">
            Start Your Cooking Adventure Now!
          </button>
        </div>
      </div>
    </section>
  );
}

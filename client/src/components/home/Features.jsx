import { motion } from 'framer-motion';

const features = [
  {
    icon: "📊",
    title: "Pantry Becomes Your Power",
    desc: "Every ingredient you enter gives CookMate more power to personalize. Your tomatoes, pasta, or spices now shape your week’s meals.Think of it as feeding your AI chef—more info means tastier, more relevant meal plans just for you.",
    cardBg: "bg-gradient-to-br from-[#FEFAE0] to-[#FAEDCD]",
    borderColor: "border-[#A9B388]",
    emojiBg: "bg-[#B99470]",
    accentColor: "text-[#5F6F52]",
    pattern: "bg-[url('/images/pantry-pattern.svg')] bg-cover bg-center"
  },
  {
    icon: "🧑‍🍳",
    title: "Plans That Adapt to You",
    desc: "CookMate doesn’t just suggest meals—it thinks like you. Hate mushrooms? Swap them out. Prefer oats in the morning? It remembers. Your preferences shape every bite.Get personalized recipes based on your pantry and swap ingredients freely.",
    cardBg: "bg-gradient-to-br from-[#FEFAE0] to-[#F8EDE3]",
    borderColor: "border-[#9A4444]",
    emojiBg: "bg-[#5F6F52]",
    accentColor: "text-[#9A4444]",
    pattern: "bg-[url('/images/recipe-pattern.svg')] bg-cover bg-center"
  },
  {
    icon: "💰",
    title: "Cook Within Your Budget",
    desc: " Tell us your weekly grocery limit and CookMate will stretch every rupee.No more mental math, no more overspending—just good food, smartly planned",
    cardBg: "bg-gradient-to-br from-[#FEFAE0] to-[#DFD7BF]",
    borderColor: "border-[#5F6F52]",
    emojiBg: "bg-[#884A39]",
    accentColor: "text-[#5F6F52]",
    pattern: "bg-[url('/images/budget-pattern.svg')] bg-cover bg-center"
  }
];

const featureVariants = {
  offscreen: {
    y: 50,
    opacity: 0
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "spring",
      bounce: 0.4,
      duration: 0.8
    }
  }
};

export default function Features() {
  return (
    <section id="features" className="py-24 bg-gradient-to-b from-[#FEFAE0] to-[#F9E0BB] border-t border-[#C38154]">
      <div className="container mx-auto px-4">
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-serif font-bold text-center text-[#5F6F52] mb-16"
        >
          Transform Your Cooking Experience
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial="offscreen"
              whileInView="onscreen"
              viewport={{ once: true, margin: "-50px" }}
              variants={featureVariants}
              whileHover={{ y: -10 }}
              className={`relative overflow-hidden rounded-2xl ${feature.cardBg} border-2 ${feature.borderColor} shadow-lg hover:shadow-xl transition-all duration-300 group`}
            >
              {/* Decorative pattern overlay */}
              <div className={`absolute inset-0 ${feature.pattern} opacity-10 group-hover:opacity-20 transition-opacity`}></div>
              
              <div className="relative z-10 p-6 h-full flex flex-col">
                <div className={`${feature.emojiBg} w-16 h-16 rounded-xl flex items-center justify-center mx-auto mb-6 text-3xl shadow-md`}>
                  {feature.icon}
                </div>
                
                <h3 className={`text-2xl font-bold mb-4 ${feature.accentColor} text-center`}>{feature.title}</h3>
                
                <p className="text-[#5F6F52] mb-6 flex-grow">{feature.desc}</p>
                
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="mt-auto"
                >
                  <button className={`w-full py-3 px-4 rounded-lg ${feature.emojiBg} text-white font-medium flex items-center justify-center space-x-2`}>
                    <span>Discover</span>
                    <span className="group-hover:translate-x-1 transition-transform">→</span>
                  </button>
                </motion.div>
              </div>
              
              {/* Floating decorative elements */}
              <motion.div 
                animate={{ y: [0, -5, 0] }}
                transition={{ duration: 3, repeat: Infinity }}
                className="absolute -top-4 -right-4 text-6xl opacity-20"
              >
                {feature.icon}
              </motion.div>
            </motion.div>
          ))}
        </div>

        {/* Section footer */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          viewport={{ once: true }}
          className="mt-20 text-center"
        >
          <motion.div
            animate={{ 
              scale: [1, 1.1, 1],
              rotate: [0, 5, -5, 0]
            }}
            transition={{ 
              duration: 4, 
              repeat: Infinity, 
              repeatType: "reverse" 
            }}
            className="inline-block text-5xl mb-4"
          >
            🍳
          </motion.div>
          <p className="text-xl text-[#884A39] max-w-2xl mx-auto">
            "CookMate helped me reduce food waste by 40% while discovering new favorite recipes!"
          </p>
          <div className="mt-4 text-[#5F6F52] font-medium">— Sarah, Home Chef</div>
        </motion.div>
      </div>
    </section>
  );
}
export default function CTA() {
  return (
    <section className="bg-[#4B1C1C] text-[#FFEEDD] py-16">
      <div className="container mx-auto px-4 text-center">
        <h2 className="text-3xl md:text-4xl font-serif font-bold mb-6">
          Ready to Transform Your Kitchen?
        </h2>

        <p className="text-xl mb-8 max-w-2xl mx-auto">
         What if your kitchen could think for you? Sign up to let CookMate turn your ingredients into intelligent meal plans—effortlessly. It’s your first step to turning chaos into control.
        </p>

       <div className="mt-20 text-center animate-bounce hover:animate-pulse">
  <button className="
    px-8 py-3 bg-[#FFEEDD] hover:bg-[#FFDAB9] text-[#4B1C1C]
    font-semibold rounded-full text-lg shadow-lg hover:shadow-xl
    transition-all transform hover:scale-105
  ">
    Start Free Trial
  </button>
</div>
      </div>
    </section>
  );
}

export default function Footer() {
  return (
    <footer className="bg-dark text-neutral py-12">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-6 md:mb-0">
            <div className="flex items-center space-x-2">
              <span className="text-2xl">🍳</span>
              <span className="text-xl font-bold">CookMate</span>
            </div>
            <p className="mt-2">Your kitchen's best friend</p>
          </div>
          <div className="flex space-x-6">
            <a href="#" className="hover:text-accent transition">Privacy</a>
            <a href="#" className="hover:text-accent transition">Terms</a>
            <a href="#" className="hover:text-accent transition">Contact</a>
          </div>
        </div>
        <div className="border-t border-gray-700 mt-8 pt-8 text-center">
          <p>© {new Date().getFullYear()} CookMate. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}

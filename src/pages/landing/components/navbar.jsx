import { Search } from "lucide-react";
import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-gradient-to-r from-green-50 via-white to-green-50 shadow-md sticky top-0 z-50">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <span className="text-2xl font-bold text-green-900 flex items-center">
            FaustyDov<span className="text-green-500">Farms</span>
          </span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-8">
          {["Home", "About Us", "Services", "Products", "Testimonials"].map(
            (link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                className="text-green-900 hover:text-green-500 font-medium transition-colors duration-300"
              >
                {link}
              </a>
            )
          )}
        </nav>

        {/* Contact and Search Section */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="text-green-900 font-medium flex items-center space-x-2">
            <span className="text-green-500">📞</span>
            <span>0543028885</span>
          </div>
          <button className="w-10 h-10 flex items-center justify-center bg-green-900 text-white rounded-full hover:bg-green-500 transition duration-300">
            <Search />
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-green-900 focus:outline-none"
          >
            {isMenuOpen ? (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            ) : (
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-6 h-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-6 px-8 space-y-4">
          {["Home", "About Us", "Services", "Products", "Testimonials"].map(
            (link, index) => (
              <a
                key={index}
                href={`#${link.toLowerCase().replace(/\s+/g, "")}`}
                className="block text-green-900 hover:text-green-500 font-medium transition-colors duration-300"
              >
                {link}
              </a>
            )
          )}
          <div className="flex items-center space-x-2">
            <span className="text-green-500">📞</span>
            <span className="text-green-900">0543028885</span>
          </div>
          <button className="w-full bg-green-900 text-white py-2 rounded-lg hover:bg-green-500 transition-all">
            Order Online
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;

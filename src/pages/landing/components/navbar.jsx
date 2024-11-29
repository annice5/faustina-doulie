import { useState } from "react";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header className="bg-white shadow-md">
      <div className="container mx-auto flex items-center justify-between py-4 px-6">
        {/* Logo Section */}
        <div className="flex items-center space-x-2">
          <span className="text-xl font-semibold text-orange-500">FD</span>
        </div>

        {/* Navigation Links */}
        <nav className="hidden md:flex space-x-10">
          <a href="#home" className="text-gray-700 hover:text-orange-500">
            Home
          </a>
          <a href="#product" className="text-gray-700 hover:text-orange-500">
            Product
          </a>
          <a href="#about us" className="text-gray-700 hover:text-orange-500">
            About Us
          </a>
          <a href="#blog" className="text-gray-700 hover:text-orange-500">
            Blog
          </a>
        </nav>

        {/* Contact and Button Section */}
        <div className="flex items-center space-x-6">
          <div className="text-gray-700 flex items-center space-x-2">
            <span className="text-orange-500">📞</span>
            <span>0543028885</span>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
            Order Online
          </button>
        </div>

        {/* Hamburger Icon for Mobile */}
        <div className="md:hidden flex items-center">
          <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="text-gray-700 focus:outline-none">
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
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-md flex flex-col space-y-4 py-4 px-6">
          <a href="#home" className="text-gray-700 hover:text-orange-500">
            Home
          </a>
          <a href="#product" className="text-gray-700 hover:text-orange-500">
            Product
          </a>
          <a href="#about us" className="text-gray-700 hover:text-orange-500">
            About Us
          </a>
          <a href="#blog" className="text-gray-700 hover:text-orange-500">
            Blog
          </a>
          <div className="text-gray-700 flex items-center space-x-2">
            <span className="text-orange-500">📞</span>
            <span>0543028885</span>
          </div>
          <button className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600">
            Order Online
          </button>
        </div>
      )}
    </header>
  );
};

export default Navbar;

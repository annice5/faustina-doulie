import { Search } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearch = () => {
    if (searchTerm.trim()) {
      alert(`You searched for: ${searchTerm}`);
      // Optionally, implement actual search functionality here.
      setSearchTerm("");
      setIsSearchOpen(false); // Close the search bar after search
    }
  };

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
              <Link
                key={index}
                to={link.toLowerCase().replace(/\s+/g, "")}
                smooth={true}
                duration={500}
                className="text-green-900 hover:text-green-500 font-medium transition-colors duration-300 cursor-pointer"
              >
                {link}
              </Link>
            )
          )}
        </nav>

        {/* Contact and Search Section */}
        <div className="hidden md:flex items-center space-x-6">
          <div className="text-green-900 font-medium flex items-center space-x-2">
            <span className="text-green-500">📞</span>
            <span>0543028885</span>
          </div>
          <button
            onClick={() => setIsSearchOpen(!isSearchOpen)}
            className="w-10 h-10 flex items-center justify-center bg-green-900 text-white rounded-full hover:bg-green-500 transition duration-300"
          >
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

      {/* Search Bar */}
      {isSearchOpen && (
        <div className="absolute inset-x-0 top-16 bg-white shadow-md py-4 px-6 flex items-center space-x-4">
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            placeholder="Search..."
            className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring focus:ring-green-500"
          />
          <button
            onClick={handleSearch}
            className="px-4 py-2 bg-green-900 text-white rounded-md hover:bg-green-500 transition duration-300"
          >
            Search
          </button>
        </div>
      )}

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-white shadow-lg py-6 px-8 space-y-4">
          {["Home", "About Us", "Services", "Products", "Testimonials"].map(
            (link, index) => (
              <Link
                key={index}
                to={link.toLowerCase().replace(/\s+/g, "")}
                smooth={true}
                duration={500}
                className="block text-green-900 hover:text-green-500 font-medium transition-colors duration-300 cursor-pointer"
              >
                {link}
              </Link>
            )
          )}
          <div className="flex items-center space-x-2">
            <span className="text-green-500">📞</span>
            <span className="text-green-900">0543028885</span>
          </div>
        </div>
      )}
    </header>
  );
};

export default Navbar;

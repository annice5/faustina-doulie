

const Navbar = () => {
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
      </div>
    </header>
  );
};

export default Navbar;

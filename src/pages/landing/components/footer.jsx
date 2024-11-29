import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-pink-100 text-gray-600 py-8 mt-48">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {/* Column 1: Company Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Company</h3>
          <ul>
            <li><a href="/" className="hover:text-orange-500">About Us</a></li>
            <li><a href="/" className="hover:text-orange-500">Careers</a></li>
            <li><a href="/" className="hover:text-orange-500">Privacy Policy</a></li>
            <li><a href="/" className="hover:text-orange-500">Terms of Service</a></li>
          </ul>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
          <ul>
            <li><a href="/" className="hover:text-orange-500">Home</a></li>
            <li><a href="/" className="hover:text-orange-500">Products</a></li>
            <li><a href="/" className="hover:text-orange-500">Blog</a></li>
            <li><a href="/" className="hover:text-orange-500">Contact Us</a></li>
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
          <ul>
            <li className="mb-2">Email: <a href="mailto:info@example.com" className="hover:text-orange-500">info@example.com</a></li>
            <li className="mb-2">Phone: <a href="tel:+1234567890" className="hover:text-orange-500">+1 234 567 890</a></li>
            <li className="mb-2">Address: 123 Street, City, Country</li>
          </ul>
        </div>

        {/* Column 4: Social Media Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
          <div className="flex space-x-4 justify-center sm:justify-start">
            <a href="https://facebook.com" className="text-white hover:text-orange-500">
              <FontAwesomeIcon icon={['fab', 'facebook-f']} />
            </a>
            <a href="https://twitter.com" className="text-white hover:text-orange-500">
              <FontAwesomeIcon icon={['fab', 'twitter']} />
            </a>
            <a href="https://instagram.com" className="text-white hover:text-orange-500">
              <FontAwesomeIcon icon={['fab', 'instagram']} />
            </a>
            <a href="https://linkedin.com" className="text-white hover:text-orange-500">
              <FontAwesomeIcon icon={['fab', 'linkedin-in']} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section with copyright */}
      <div className="bg-pink-100 text-center py-4 mt-8">
        <p>&copy; 2024 Your Company. All rights reserved.</p>
      </div>
    </footer>
  );
}

export default Footer;

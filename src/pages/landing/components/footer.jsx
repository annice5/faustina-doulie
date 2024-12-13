import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { Facebook, Instagram } from "lucide-react";
import { Link } from "react-scroll";

const Footer = () => {
  return (
    <footer className="bg-green-900 text-gray-100 py-12">
      <div className="max-w-screen-xl mx-auto px-6 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
        {/* Column 1: Company Info */}
        <div>
          <div className="flex items-center space-x-2">
            <span className="text-2xl font-bold text-white">
              FaustyDov<span className="text-green-500">Farms</span>
            </span>
          </div>
          <p className="text-sm text-gray-300 mt-4">
            Dedicated to providing high-quality products and exceptional service. We strive to cultivate excellence in every aspect of our business.
          </p>
        </div>

        {/* Column 2: Quick Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-green-300">Quick Links</h3>
          <ul className="space-y-2">
            {["Home", "About Us", "Services", "Products", "Testimonials"].map(
              (link, index) => (
                <li key={index}>
                  <Link
                    to={link.toLowerCase().replace(/\s+/g, "")}
                    smooth={true}
                    duration={500}
                    className="hover:text-green-500 transition duration-200 font-medium cursor-pointer"
                  >
                    {link}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>

        {/* Column 3: Contact Info */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-green-300">Contact Info</h3>
          <ul className="space-y-2 text-sm">
            <li>
              <span className="font-medium">Email:</span>{" "}
              <a
                href="mailto:info@example.com"
                className="hover:text-green-500 transition duration-200"
              >
                faustimash@gmail.com
              </a>
            </li>
            <li>
              <span className="font-medium">Phone:</span>{" "}
              <a
                href="tel:+1234567890"
                className="hover:text-green-500 transition duration-200"
              >
                +233 540444828
              </a>
            </li>
            <li>
              <span className="font-medium">Address:</span> Drobonso-Ashanti Region
            </li>
          </ul>
        </div>

        {/* Column 4: Social Media Links */}
        <div>
          <h3 className="text-lg font-bold mb-4 text-green-300">Follow Us</h3>
          <div className="space-y-3">
            <a
              href="https://www.instagram.com/faustidov_farms/profilecard/?igsh=em9rMWV1cGQ2Nmdr"
              className="flex items-center gap-3 text-sm font-medium hover:text-green-500 transition duration-200"
            >
              <Instagram className="text-green-500" size={20} />
              Instagram
            </a>
            <a
              href="https://www.facebook.com/profile.php?id=61570138089191"
              className="flex items-center gap-3 text-sm font-medium hover:text-green-500 transition duration-200"
            >
              <Facebook className="text-green-500" size={20} />
              Facebook
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Section with Copyright */}
      <div className="border-t border-gray-700 mt-12 pt-6 text-center">
        <p className="text-sm font-medium">
          &copy; 2024 FaustyDovFarms. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;

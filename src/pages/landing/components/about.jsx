import { motion } from "framer-motion";
import { Link } from "react-scroll";

const About = () => {
  return (
    <section id="aboutus" className="flex flex-col md:flex-row items-center justify-center py-16 px-6 bg-white relative overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-green-200 opacity-30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-200 opacity-30 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>

      {/* Left Section: Image */}
      <motion.div
        className="relative md:w-1/2 flex justify-center"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <div className="relative">
          <img
            src="https://via.placeholder.com/400" // Replace with your image URL
            alt="Delicious okro"
            className="rounded-full w-80 h-80 object-cover border-8 border-pink-100 shadow-lg"
          />
          <div className="absolute -bottom-4 -right-4 bg-green-500 w-20 h-20 rounded-full border-4 border-white flex items-center justify-center">
            <span className="text-white font-bold text-lg">100%</span>
          </div>
        </div>
      </motion.div>

      {/* Right Section: Text */}
      <motion.div
        className="md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h4 className="text-green-900 uppercase text-sm tracking-wide font-semibold">
          About Us
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 leading-snug">
          A Simple Way to Enjoy Deliciousness
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
        At FaustyDov Farms, we believe in bringing nature’s best to your kitchen! Nestled in the heart of Ghana, our journey begins right on our very own lush okro farm. We take pride in growing the finest, freshest okro, handpicked at its peak to ensure top-notch quality for our customers.But we didn’t stop there! Inspired by the rich culinary traditions of our ancestors, we’ve perfected a unique blend that goes beyond ordinary powdered okro. By mixing our fresh okro with the natural goodness of Ginger, Garlic, and Ayoyo Leaves, we’ve created a product that’s as nutritious as it is flavorful. Our fortified powdered okro is not just food,it’s a wholesome experience designed to delight your taste buds and nourish your body.


        </p>
       <Link to="services">
       <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 px-6 py-3 bg-green-900 text-white rounded-full shadow-md hover:bg-green-400 transition-all duration-300"
        >
          Learn More
        </motion.button>
       </Link>
      </motion.div>
    </section>
  );
};

export default About;

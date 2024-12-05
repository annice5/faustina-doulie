import { motion } from "framer-motion";
import hero from "../../../assets/hero.jpg";
import { Link } from "react-scroll";

const Hero = () => {
  const text = "Delicious";
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2,
        duration: 0.5,
      },
    }),
  };

  return (
    <section id="home" className="bg-green-200 min-h-screen flex items-center relative overflow-hidden">
      {/* Decorative Blur Circle */}
      <div className="absolute top-0 left-0 w-72 h-72 bg-orange-500 opacity-30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-16 relative z-10">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800">
            <motion.div
              className="flex justify-center md:justify-start"
              initial="hidden"
              animate="visible"
            >
              {text.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={textVariant}
                  className="relative text-6xl md:text-7xl lg:text-8xl font-serif text-green-900 animate-pulse"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.div>
            <span className="block text-lg md:text-2xl lg:text-4xl mt-4">
              Powdered Okro
            </span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Fortified powdered okro with a mix of <br /> Ginger, Garlic, and Ayoyo leaves.
          </p>
          <Link to = 'products'>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            className="bg-green-900 text-white px-8 py-3 rounded-full shadow-md hover:bg-green-400 transition-all duration-300 mt-6"
          >
            Explore Menu
          </motion.button>
          </Link>
        </div>

        {/* Right Image */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="relative"
        >
          <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
            <motion.img
              whileHover={{ scale: 1.05 }}
              src={hero}
              alt="Powdered Okro"
              className="object-cover w-full h-full transition-transform duration-500"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;

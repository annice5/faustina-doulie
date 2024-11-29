import { motion } from "framer-motion";

const Hero = () => {
  const text = 'Delicious'
  const textVariant = {
    hidden: { opacity: 0, y: 20 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.2, // Animates each letter with a delay
        duration: 0.5,
      },
    }),
  };

  return (
    <section className="bg-pink-100 min-h-screen flex items-center">
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center px-6 md:px-16">
        {/* Left Content */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight text-gray-800 relative">
            <motion.h1
              className="flex"
              initial="hidden"
              animate="visible"
            >
              {text.split("").map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={textVariant}
                  className="relative text-6xl md:text-4xl lg:text-5xl font-serif opacity-0 text-gray-300 animate-pulse"
                >
                  {letter}
                </motion.span>
              ))}
            </motion.h1>
            <span className="block text-lg md:text-xl lg:text-4xl mt-4">Delicious Powdered</span>
            <span className="block text-lg md:text-xl lg:text-4xl">Okro</span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed mt-4">
            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-orange-600 mt-6">
            Explore Menu
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="w-full h-full rounded-lg overflow-hidden shadow-lg">
            <img
              src="https://images.unsplash.com/photo-1562967914-4c2b7986ed51"
              alt="Cake"
              className="object-cover w-full h-full"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

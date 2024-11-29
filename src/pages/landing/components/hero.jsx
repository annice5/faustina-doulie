
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
          
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-800 relative">
          <div className="">
          <motion.h1
        className="text-4xl md:text-6xl font-bold text-gray-800 flex "
        initial="visible"
        
      >
        {text.split(" ").map((word, i) => (
          <motion.span
            key={i}
            custom={i}
            variants={textVariant}
            className=" absolute text-[100px] font-bold opacity-0 text-gray-300 -left-2 -top-20 font-serif animate-pulse "
          >
            {word}
          </motion.span>
        ))}
      </motion.h1>
           </div>
            <span className="block">Delicious Powdered </span>
            <span className="block">Okro </span>
          </h1>
          <p className="text-gray-600 text-lg leading-relaxed">
          Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts. Separated they live in Bookmarksgrove.
          </p>
          <button className="bg-orange-500 text-white px-6 py-3 rounded-full shadow-md hover:bg-orange-600">
            Explore Menu
          </button>
        </div>

        {/* Right Image */}
        <div className="relative">
          <div className="w-full h-full rounded-full overflow-hidden shadow-lg">
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








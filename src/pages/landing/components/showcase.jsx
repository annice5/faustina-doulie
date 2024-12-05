import { motion } from "framer-motion";

const Showcase = () => {
  return (
    <section id="services" className="relative flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-green-200 to-gray-100 mt-36 px-6 overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-green-300 opacity-30 rounded-full blur-3xl transform -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-80 h-80 bg-pink-200 opacity-30 rounded-full blur-3xl transform translate-x-1/3 translate-y-1/3"></div>

      {/* Heading Section */}
      <motion.div
        initial={{ opacity: 0, y: -50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center"
      >
        <h4 className="text-green-900 uppercase text-sm tracking-wide font-semibold">
          Services
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-6">
          Watch Our Story
        </h2>
      </motion.div>

      {/* Video Container */}
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
        className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 relative rounded-xl overflow-hidden shadow-lg"
      >
        <video
          className="w-full h-auto rounded-xl border-4 border-green-900 shadow-lg"
          controls
          poster="https://via.placeholder.com/800x400?text=Video+Thumbnail"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
        {/* Decorative Play Icon */}
        <div className="absolute inset-0 flex items-center justify-center">
          <div className="w-24 h-24 bg-white bg-opacity-50 rounded-full flex items-center justify-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-12 h-12 text-green-900"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M5.25 5.25l13.5 6.75-13.5 6.75V5.25z"
              />
            </svg>
          </div>
        </div>
      </motion.div>

      {/* Subtitle Section */}
      <motion.p
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.4 }}
        className="mt-6 text-gray-600 text-lg text-center leading-relaxed max-w-2xl"
      >
        Discover the story behind our service and how we make a difference.
        Watch our video to learn about the passion and dedication that drives
        us to deliver excellence.
      </motion.p>
    </section>
  );
};

export default Showcase;

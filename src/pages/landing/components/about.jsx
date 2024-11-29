const About = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-center py-16 px-4 bg-white">
      {/* Left Section: Image */}
      <div className="relative md:w-1/2 flex justify-center">
        <div className="relative">
          <img
            src="https://via.placeholder.com/400" // Replace with your image URL
            alt="Delicious Cake"
            className="rounded-full w-80 h-80 object-cover border-8 border-pink-100" // Adjusted size for responsiveness
          />
        </div>
      </div>

      {/* Right Section: Text */}
      <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8 text-center md:text-left">
        <h4 className="text-orange-500 uppercase text-sm tracking-wide font-semibold">
          Fresh & Delicious
        </h4>
        <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mt-2 leading-snug">
          A Simple Way to Eating Delicious
        </h2>
        <p className="text-gray-600 mt-4 leading-relaxed">
          Land behold it created good saw after she'd Our set living. Signs
          midst dominion creepeth morning laboris nisi ufsit aliquip ex ea
          commodo conse quat is aute irure, quis nostrud exer.
        </p>
        <button className="mt-6 px-6 py-3 bg-orange-500 text-white font-semibold rounded-lg shadow-md hover:bg-orange-600 transition">
          Our Story
        </button>
      </div>
    </section>
  );
};

export default About;

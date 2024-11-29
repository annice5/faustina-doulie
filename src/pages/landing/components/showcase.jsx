const Showcase = () => {
  return (
    <section className="flex flex-col items-center justify-center min-h-screen bg-gray-100 mt-36 px-4">
      {/* Heading Section */}
      <h2 className="text-3xl font-bold text-gray-800 mb-6 text-center">
        Watch Our Story
      </h2>
    
      {/* Video Container */}
      <div className="w-full md:w-3/4 lg:w-2/3 xl:w-1/2 relative rounded-xl overflow-hidden shadow-lg">
        <video
          className="w-full h-auto"
          controls
          poster="https://via.placeholder.com/800x400?text=Video+Thumbnail"
        >
          <source
            src="https://www.w3schools.com/html/mov_bbb.mp4"
            type="video/mp4"
          />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  );
};

export default Showcase;

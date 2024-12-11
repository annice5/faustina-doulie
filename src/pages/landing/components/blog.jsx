import React from 'react';

const Blog = () => {
  return (
    <section id='testimonials' className="bg-gradient-to-r from-green-100 via-white to-green-100 py-12 px-6 mt-36">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Heading */}
        <h4 className="text-green-900 uppercase text-sm tracking-wide font-semibold">
          Testimonials
        </h4>
        <h2 className="text-4xl font-bold text-gray-800 mb-8">
          What Our Clients Say
        </h2>

        {/* Testimonials Container */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p className='text-gray-800 text-lg font-bold mb-6'>
          Convenience and Quality!
            </p>
            <p className="text-gray-600 text-lg italic mb-6">
            "Cooking with FaustyDov’s fortified powdered okro is a game-changer! It’s so convenient to use, and the flavor it brings is unmatched. My kids love it, and I’ve even noticed an improvement in my digestion since I started using it. Highly recommended to anyone who loves good food!"
            </p>
            <div className="flex items-center">
              
              <div>
                <p className="font-semibold text-gray-800">— Kwame Asiedu, Kumasi</p>
               
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
          <p className='text-gray-800 text-lg font-bold mb-6'>
          A Taste Worth Sharing!
            </p>
            <p className="text-gray-600 text-lg italic mb-6">
            "I bought FaustyDov Farms’ powdered okro on a friend’s recommendation, and I can’t thank her enough! The ginger and garlic give it a unique kick, and the ayoyo leaves add such richness to my stews. I’ve been telling everyone I know about this amazing product!"
            </p>
            <div className="flex items-center">
             
              <div>
                <p className="font-semibold text-gray-800">— Esi Larbi, Takoradi

              </p>
               
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className='text-gray-800 text-lg font-bold mb-6'>
            Health and Taste Combined!
            </p>
            <p className="text-gray-600 text-lg italic mb-6">
            "I’ve never tasted powdered okro like this before! The unique blend of ginger, garlic, and ayoyo leaves takes my soups to a whole new level. Not only is it delicious, but it also feels like I’m feeding my family something incredibly healthy. FaustyDov Farms, you have a loyal customer for life!"
            </p>
            <div className="flex items-center">
              
              <div>
                <p className="font-semibold text-gray-800">— Abena Mensah, Accra</p>
                
              </div>
            </div>
          </div>
        </div>

        {/* Decorative Gradient Bar */}
        <div className="h-1 w-1/3 mx-auto mt-8 bg-gradient-to-r from-green-500 via-green-300 to-green-500 rounded-full"></div>
      </div>
    </section>
  );
};

export default Blog;

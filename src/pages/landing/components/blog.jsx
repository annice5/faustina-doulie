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
            <p className="text-gray-600 text-lg italic mb-6">
              "The best service I have ever used. They truly care about their
              clients and go above and beyond to meet our needs."
            </p>
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/60"
                alt="Client 1"
                className="rounded-full w-16 h-16 object-cover border-2 border-green-500 mr-4"
              />
              <div>
                <p className="font-semibold text-gray-800">Jane Doe</p>
                <p className="text-gray-500 text-sm">CEO, Example Corp</p>
              </div>
            </div>
          </div>

          {/* Testimonial 2 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-600 text-lg italic mb-6">
              "A fantastic experience. The team was professional, and the
              results exceeded my expectations. Highly recommended!"
            </p>
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/60"
                alt="Client 2"
                className="rounded-full w-16 h-16 object-cover border-2 border-green-500 mr-4"
              />
              <div>
                <p className="font-semibold text-gray-800">John Smith</p>
                <p className="text-gray-500 text-sm">Founder, Startup XYZ</p>
              </div>
            </div>
          </div>

          {/* Testimonial 3 */}
          <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
            <p className="text-gray-600 text-lg italic mb-6">
              "I have worked with many companies, but none compare to the level
              of service I received here. They’re simply the best!"
            </p>
            <div className="flex items-center">
              <img
                src="https://via.placeholder.com/60"
                alt="Client 3"
                className="rounded-full w-16 h-16 object-cover border-2 border-green-500 mr-4"
              />
              <div>
                <p className="font-semibold text-gray-800">Emily Johnson</p>
                <p className="text-gray-500 text-sm">
                  Marketing Director, BrandX
                </p>
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

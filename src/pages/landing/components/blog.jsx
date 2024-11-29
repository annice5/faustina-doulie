import React from 'react'

const Blog = () => {
  return (
     <section className="bg-white py-12 px-6 mt-36">
      <div className="max-w-screen-xl mx-auto text-center">
        {/* Heading */}
        <h2 className="text-4xl font-semibold text-gray-800 mb-8">
          What Our Clients Say
        </h2>
        
        {/* Testimonials Container */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Testimonial 1 */}
          <div className="bg-pink-100 p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 text-lg italic mb-4">
              "The best service I have ever used. They truly care about their
              clients and go above and beyond to meet our needs."
            </p>
            <div className="flex items-center justify-center">
              <img
                src="https://via.placeholder.com/60"
                alt="Client 1"
                className="rounded-full w-16 h-16 object-cover mr-4"
              />
              <div>
                <p className="font-semibold text-gray-800">Jane Doe</p>
                <p className="text-gray-600">CEO, Example Corp</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 2 */}
          <div className="bg-pink-100 p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 text-lg italic mb-4">
              "A fantastic experience. The team was professional, and the
              results exceeded my expectations. Highly recommended!"
            </p>
            <div className="flex items-center justify-center">
              <img
                src="https://via.placeholder.com/60"
                alt="Client 2"
                className="rounded-full w-16 h-16 object-cover mr-4"
              />
              <div>
                <p className="font-semibold text-gray-800">John Smith</p>
                <p className="text-gray-500">Founder, Startup XYZ</p>
              </div>
            </div>
          </div>
          
          {/* Testimonial 3 */}
          <div className="bg-pink-100 p-6 rounded-lg shadow-lg">
            <p className="text-gray-600 text-lg italic mb-4">
              "I have worked with many companies, but none compare to the level
              of service I received here. They’re simply the best!"
            </p>
            <div className="flex items-center justify-center">
              <img
                src="https://via.placeholder.com/60"
                alt="Client 3"
                className="rounded-full w-16 h-16 object-cover mr-4"
              />
              <div>
                <p className="font-semibold text-gray-800">Emily Johnson</p>
                <p className="text-gray-500">Marketing Director, BrandX</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Blog
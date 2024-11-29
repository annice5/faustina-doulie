
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation';
import { Navigation } from 'swiper/modules';


const Product = () => {
  const okros = [
    {
      id: 1,
      name: 'Powdered Okro one',
      description: "Land behold it created good saw after she'd our set.",
      price: 'GH20',
      image: 'https://via.placeholder.com/300x200?text=Sweetheart',
    },
    {
      id: 2,
      name: 'Powdered Okro two',
      description: "Land behold it created good saw after she'd our set.",
      price: 'GH20',
      image: 'https://via.placeholder.com/300x200?text=Blackforest',
    },
    {
      id: 3,
      name: 'Powdered Okro three',
      description: "Land behold it created good saw after she'd our set.",
      price: 'GH20',
      image: 'https://via.placeholder.com/300x200?text=Chocolate',
    },
  ];
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <h2 className="text-3xl font-bold text-center mb-12">
          Our Exclusive Products
        </h2>

        {/* Carousel */}
        <Swiper
          spaceBetween={10}
          slidesPerView={3}
           modules={[Navigation]}
          breakpoints={{
            640: {
              slidesPerView: 1,
            },
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
          }}
          className="swiper-container  "
        >
          
          {okros.map((okros) => (
           <SwiperSlide key={okros.id}>
            <div className="w-full bg-pink-100 rounded-br-3xl  hover:shadow-xl transition-shadow duration-300">
                <img
                  src={okros.image}
                  alt={okros.name}
                  className="w-full h-48 object-cover rounded-t-lg"
                />
                <div className="p-6 text-center">
                  <h3 className="text-xl font-semibold mb-2">{okros.name}</h3>
                  <p className="text-gray-600 mb-4">{okros.description}</p>
                  <button className="bg-orange-500 text-white px-6 py-2 rounded-lg font-semibold hover:bg-orange-600 transition">
                    {okros.price} | Order Now
                  </button>
                </div>
              </div>
           </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  )
}

export default Product
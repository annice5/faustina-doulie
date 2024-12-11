import React, { useState } from "react";

const Product = () => {
  const [selectedProduct, setSelectedProduct] = useState(null);

  const products = [
    {
      id: 1,
      name: "Powdered Okro One",
      description: "Delicious and nutritious powdered okro, perfect for soups.",
      price: "GH20",
      image: "https://via.placeholder.com/300x200?text=Sweetheart",
    },
    {
      id: 2,
      name: "Powdered Okro Two",
      description: "Healthy powdered okro made with the finest ingredients.",
      price: "GH20",
      image: "https://via.placeholder.com/300x200?text=Blackforest",
    },
    {
      id: 3,
      name: "Powdered Okro Three",
      description: "Premium quality powdered okro for your cooking needs.",
      price: "GH20",
      image: "https://via.placeholder.com/300x200?text=Chocolate",
    },
  ];

  const handleBuyNowClick = (product) => {
    setSelectedProduct(product); // Show the popup with selected product details
  };

  const closePopup = () => {
    setSelectedProduct(null); // Close the popup
  };

  return (
    <section
      id="products"
      className="py-16 bg-gradient-to-b from-green-50 to-white"
    >
      <div className="container mx-auto px-4">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h4 className="text-green-900 uppercase text-sm tracking-wide font-semibold">
            Products
          </h4>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800">
            Our Exclusive Products
          </h2>
          <p className="mt-4 text-gray-600 max-w-2xl mx-auto">
            Discover our premium range of powdered okro, crafted for your
            culinary delight.
          </p>
        </div>

        {/* Product Cards */}
        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {products.map((product) => (
            <div
              key={product.id}
              className="group relative bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300"
            >
              {/* Product Image */}
              <div className="relative overflow-hidden">
                <img
                  src={product.image}
                  alt={product.name}
                  className="w-full h-48 object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-0 group-hover:opacity-60 transition-opacity duration-300"></div>
              </div>

              {/* Product Info */}
              <div className="p-6 space-y-4">
                <h3 className="text-lg font-bold text-gray-800 group-hover:text-green-900 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-600 text-sm">{product.description}</p>
                <div className="flex justify-between items-center">
                  <p className="text-green-900 font-semibold text-lg">
                    {product.price}
                  </p>
                  <button
                    onClick={() => handleBuyNowClick(product)}
                    className="px-4 py-2 bg-green-900 text-white rounded-full shadow-md hover:bg-green-400 transition-all"
                  >
                    Buy Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Popup */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-lg shadow-lg max-w-md w-full p-6 relative">
            <h2 className="text-xl font-bold text-gray-800 mb-4">
              {selectedProduct.name}
            </h2>
            <p className="text-gray-600 mb-4 font-bold font-serif"> Call 0543028885 To Buy!</p>
            <p className="text-green-900 font-semibold text-lg mb-6">
              Price: {selectedProduct.price}
            </p>
            <button
              onClick={closePopup}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700"
            >
              &times;
            </button>
            <button
              onClick={closePopup}
              className="px-4 py-2 bg-green-900 text-white rounded-full shadow-md hover:bg-green-400 transition-all"
            >
              Close
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Product;

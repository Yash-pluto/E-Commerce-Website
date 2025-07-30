import { useState, useEffect } from "react";
import { products } from "../components/productData";
import ProductCarousel from "../components/ProductCarousel";

export default function ShopPage() {
  const [textClass, setTextClass] = useState("fade-in");
  const [showIntro, setShowIntro] = useState(true);
  const [revealShop, setRevealShop] = useState(false);
  const [selectedProduct, setSelectedProduct] = useState(null);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => setTextClass("fade-out"), 2000);
    const hideIntroTimer = setTimeout(() => {
      setShowIntro(false);
      setRevealShop(true);
    }, 3000);
    return () => {
      clearTimeout(fadeOutTimer);
      clearTimeout(hideIntroTimer);
    };
  }, []);

  return (
    <div className='min-h-screen bg-black text-white relative overflow-hidden'>
      {showIntro && (
        <div className='absolute inset-0 flex items-center justify-center z-20'>
          <h1
            className={`text-3xl md:text-5xl font-bold text-blue-400 ${textClass} text-center max-w-[90%] md:max-w-none`}
          >
            🛒 Welcome to Hellstore. Browse Freely.
          </h1>
        </div>
      )}

      <div
        className={`transition-opacity duration-1000 ease-in-out z-10 ${
          revealShop ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className='p-8'>
          {selectedProduct && (
            <div className='bg-gray-900 p-6 rounded-xl mb-12'>
              <h2 className='text-3xl font-bold mb-4'>
                {selectedProduct.name}
              </h2>
              <ProductCarousel images={selectedProduct.images} />
              <p className='mt-4 text-lg text-gray-300'>
                {selectedProduct.description}
              </p>
              <p className='mt-2 text-blue-400 font-bold text-xl'>
                {selectedProduct.price}
              </p>
              <button
                onClick={() => setSelectedProduct(null)}
                className='mt-6 bg-red-600 hover:bg-red-700 px-6 py-3 rounded font-semibold text-white'
              >
                ⬅ Close
              </button>
            </div>
          )}

          <div className='mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
            {products
              .filter((item) => item.id !== selectedProduct?.id)
              .map((item) => (
                <div
                  key={item.id}
                  className='bg-gray-800 p-4 rounded shadow hover:scale-105 transition-transform cursor-pointer'
                  onClick={() => setSelectedProduct(item)}
                >
                  <img
                    src={item.images[0]}
                    alt={item.name}
                    className='w-full h-40 object-contain mb-3'
                  />
                  <h3 className='text-lg font-semibold'>{item.name}</h3>
                  <p className='text-sm text-gray-400'>{item.price}</p>
                </div>
              ))}
          </div>
        </div>
      </div>
    </div>
  );
}

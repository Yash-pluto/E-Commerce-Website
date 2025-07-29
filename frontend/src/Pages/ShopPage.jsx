import { useState, useEffect } from "react";

export default function ShopPage() {
  const [textClass, setTextClass] = useState("fade-in");
  const [showIntro, setShowIntro] = useState(true);
  const [revealShop, setRevealShop] = useState(false);

  useEffect(() => {
    const fadeOutTimer = setTimeout(() => {
      setTextClass("fade-out");
    }, 2000);

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
          <div className='flex justify-between items-center mb-8'>
            <h2 className='text-2xl font-semibold text-white'>
              🔥 Featured Items
            </h2>
            <button className='bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded'>
              🛒 Cart
            </button>
          </div>

          {/* Placeholder for shop items */}
          {/* Replace with actual stuff later */}
          <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6'>
            <div className='bg-gray-800 p-4 rounded shadow'>Item 1</div>
            <div className='bg-gray-800 p-4 rounded shadow'>Item 2</div>
            <div className='bg-gray-800 p-4 rounded shadow'>Item 3</div>
            <div className='bg-gray-800 p-4 rounded shadow'>Item 4</div>
          </div>
        </div>
      </div>
    </div>
  );
}

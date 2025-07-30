import { useState } from "react";

export default function ProductCarousel({ images = [] }) {
  const [currentIndex, setCurrentIndex] = useState(0);

  if (!images || images.length === 0) return null;

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <div className='relative w-full max-w-xl mx-auto overflow-hidden rounded-xl bg-[#111]'>
      <img
        src={images[currentIndex]}
        alt={`Product ${currentIndex + 1}`}
        className='w-full h-auto object-contain transition-all duration-500'
      />

      <button
        onClick={prevSlide}
        className='absolute top-1/2 left-2 transform -translate-y-1/2 bg-blue-400 bg-opacity-100 text-white px-2 py-1 rounded-full hover:bg-opacity-80 z-10'
      >
        -
      </button>
      <button
        onClick={nextSlide}
        className='absolute top-1/2 right-2 transform -translate-y-1/2 bg-blue-400 bg-opacity-100 text-white px-2 py-1 rounded-full hover:bg-opacity-80 z-10'
      >
        +
      </button>

      <div className='absolute bottom-3 left-1/2 transform -translate-x-1/2 flex gap-2'>
        {images.map((_, index) => (
          <div
            key={index}
            className={`w-2 h-2 rounded-full ${
              index === currentIndex ? "bg-blue-500" : "bg-gray-400"
            }`}
          />
        ))}
      </div>
    </div>
  );
}

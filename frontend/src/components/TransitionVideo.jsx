import { useEffect, useRef } from "react";
import { useNavigate } from "react-router-dom";

export default function TransitionVideo({ redirectTo }) {
  const videoRef = useRef();
  const navigate = useNavigate();

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const handleEnd = () => {
      navigate(redirectTo);
    };

    video.addEventListener("ended", handleEnd);

    const fallback = setTimeout(() => {
      console.warn("Fallback navigation triggered 🚨");
      navigate(redirectTo);
    }, 2000);

    return () => {
      clearTimeout(fallback);
      video.removeEventListener("ended", handleEnd);
    };
  }, [redirectTo, navigate]);

  return (
    <div className='fixed inset-0 bg-black z-50 flex items-center justify-center'>
      <video
        ref={videoRef}
        src='/flame2.mp4'
        autoPlay
        playsInline
        muted
        className='w-full h-full object-cover'
      />
    </div>
  );
}

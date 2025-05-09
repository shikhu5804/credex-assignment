import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const ZoomImageOnScroll = () => {
  const imageRef = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    const image = imageRef.current;
    const minScale = 1;
    const maxScale = 1.5;

    ScrollTrigger.create({
      trigger: containerRef.current,
      start: "top bottom",
      end: "bottom top",
      onUpdate: (self) => {
        const progress = self.progress;
        const scale = minScale + (maxScale - minScale) * progress;
        gsap.to(image, {
          scale: scale,
          duration: 0.1,
          ease: "power1.out",
        });
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <div 
      ref={containerRef}
      className="w-[95%]  md:min-h-[90vh] h-[50vh] overflow-hidden mx-auto mt-0 rounded-xl shadow-lg relative"
    >
      {/* Image */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80 z-10"></div>

      <img
        ref={imageRef}
        src="https://plus.unsplash.com/premium_photo-1682986671851-eba6a14e77af?q=80&w=2058&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="Zoomable"
        className="w-full h-full object-cover origin-center"
        style={{ scale: 1 }}
      />

      {/* Overlay Text */}
      <div className="absolute inset-0 flex items-center justify-center">
        <h2 className="text-white text-4xl sm:text-6xl md:text-8xl leading-tight font-bold px-2 drop-shadow-2xl">
          earn <span className="text-white">more.</span>
        </h2>
      </div>
    </div>
  );
};

export default ZoomImageOnScroll;
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Product Manager",
    company: "VisionX Solutions",
    text: "Working with your team was a game-changer for us. The delivery was smooth, fast, and exceeded our expectations. We truly felt heard and understood throughout the process.",
    bgColor: "bg-[#96DCC7]"
  },
  {
    name: "David Lee",
    role: "CEO",
    company: "NovaTech Innovations",
    text: "What stood out the most was the attention to detail and clarity in communication. We’ve collaborated with several teams before, but this experience was truly outstanding.",
    bgColor: "bg-[#CCF56B]"
  }
];

const ReviewSection = () => {
  const cardsRef = useRef([]);

  useEffect(() => {
    cardsRef.current.forEach((card, index) => {
      gsap.fromTo(
        card,
        { scale: 0.95, opacity: 0.7 },
        {
          scale: 1,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          scrollTrigger: {
            trigger: card,
            start: "top 80%",
            toggleActions: "play none none reverse"
          }
        }
      );
    });
  }, []);

  return (
    <section id="reviews" className="py-20 px-6 bg-white">
      <h2 className="text-5xl font-bold text-center mb-12">
      Trusted by Professionals
      </h2>

      <div className="grid gap-8 md:grid-cols-2 max-w-6xl mx-auto">
        {testimonials.map((review, index) => (
          <div
            key={index}
            ref={(el) => (cardsRef.current[index] = el)}
            className={`p-6 rounded-xl shadow-lg transform transition-transform duration-300 ${review.bgColor}`}
          >
            <p className="text-3xl font-medium mb-4">"{review.text}"</p>
            <p className="text-lg font-semibold">
              {review.name}, {review.role} – {review.company}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ReviewSection;

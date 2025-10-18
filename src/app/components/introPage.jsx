// IntroPage.jsx
import React, { useEffect, useRef } from "react";
import gsap from "gsap";

const IntroPage = ({ onFinish }) => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Split text into letters dynamically in JS
    const textElement = containerRef.current.querySelector(".intro-text");
    const letters = textElement.textContent.split("");
    textElement.textContent = ""; // clear original text

    // Wrap each letter in a span
    letters.forEach((letter) => {
      const span = document.createElement("span");
      span.textContent = letter;
      span.style.display = "inline-block";
      textElement.appendChild(span);
    });

    // GSAP timeline
    const tl = gsap.timeline({
      onComplete: () => {
        gsap.to(containerRef.current, {
          opacity: 0,
          duration: 0.5,
          ease: "power1.out",
          onComplete: onFinish,
        });
      },
    });

    // Animate letters with stagger
    tl.from(
      textElement.querySelectorAll("span"),
      {
        y: 50,
        opacity: 0,
        duration: 0.6,
        ease: "power3.out",
        stagger: 0.1,
      },
      0
    );

    // Move letters up and fade out
    tl.to(textElement.querySelectorAll("span"), {
      y: -50,
      opacity: 0,
      duration: 1,
      ease: "power2.inOut",
      stagger: 0.05,
      delay: 0.5,
    });
  }, [onFinish]);

  return (
    <div
      ref={containerRef}
      className="intro-container w-screen h-screen flex items-center justify-center bg-black"
    >
      <h1 className="intro-text text-white text-6xl md:text-[12rem] font-bold tracking-wide">DIGISTAY</h1>
    </div>
  );
};

export default IntroPage;

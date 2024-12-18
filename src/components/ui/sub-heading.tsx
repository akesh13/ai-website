"use client";

import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect, useRef, useState } from "react";
gsap.registerPlugin(ScrollTrigger);

//types
type HeadingProps = {
  heading: string;
  para: string;
};

const SubHeading = ({ heading, para }: HeadingProps) => {
  const headRef = useRef(null);
  const headRef1 = useRef(null);
  const wrapperRef = useRef(null);

  useGSAP(() => {
    gsap.set(headRef.current, {
      scale: 0.9,
      filter: "blur(10px)",
    });
    gsap.set(headRef1.current, {
      y: 150,
    });
    gsap.to([headRef.current], {
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none play reverse",
        // markers: true,
      },
      scale: 1,
      opacity: 1,
      stagger: 0.5,
      duration: 0.5,
      filter: "blur(0px)",
    });

    gsap.to(headRef1.current, {
      scrollTrigger: {
        trigger: wrapperRef.current,
        start: "top 80%",
        end: "bottom bottom",
        toggleActions: "play none play reverse",
        // markers: true,
      },
      y: 0,
      duration: 0.5,
      delay: 0.2,
      ease: "power1.inOut",
    });
  });
  return (
    <section
      ref={wrapperRef}
      className="flex flex-col justify-center items-center space-y-8 overflow-hidden"
    >
      <h2
        ref={headRef}
        className="text-4xl md:text-6xl font-heading opacity-0 font-bold w-[90%] md:w-[60%] text-center bg-gradient-to-bl from-purple-300 to-purple-950 text-transparent bg-clip-text"
      >
        {heading}
      </h2>
      <p
        ref={headRef1}
        className="font-normal font-body text-center text-sm w-[80%]  md:text-md text-white/80"
      >
        {para}
      </p>
    </section>
  );
};

export default SubHeading;

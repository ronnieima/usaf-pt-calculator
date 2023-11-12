"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeAnimationWrapper = () => {
  return (
    <TypeAnimation
      preRenderFirstString={true}
      className=" w-[80%] text-center
        text-5xl text-shadow-lg sm:w-[66%] sm:text-7xl lg:text-8xl"
      aria-label="Calculate your Air Force PT score."
      role="marquee"
      sequence={["Cal", "Calculate your Air Force PT score."]}
      wrapper="h1"
      speed={50}
    />
  );
};

export default TypeAnimationWrapper;

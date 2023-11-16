"use client";
import React from "react";
import { TypeAnimation } from "react-type-animation";

const TypeAnimationWrapper = () => {
  return (
    <h1 className="relative text-center">
      <span
        style={{
          clip: "rect(1px, 1px, 1px, 1px)",
          clipPath: "inset(50%)",
          height: "1px",
          width: "1px",
          margin: "-1px",
          overflow: "hidden",
          padding: "0",
          position: "absolute",
        }}
      >
        Calculate your Air Force PT score.
      </span>
      <TypeAnimation
        aria-hidden="true"
        preRenderFirstString={true}
        className=" min-w-[80%] whitespace-pre-line
       text-5xl text-shadow-lg sm:text-7xl lg:text-8xl	"
        sequence={["Cal", "Calculate your\nAir Force PT score."]}
        wrapper="span"
      />
    </h1>
  );
};

export default TypeAnimationWrapper;

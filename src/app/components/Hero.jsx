"use client";
import React from "react";
import Image from "next/image";
import { imageAssets } from "../assets/data";

const Hero = () => {
  return (
    <main className="w-full h-[500px] md:h-screen relative overflow-hidden">
      <Image
        src={imageAssets.bkg3}
        alt="hero banner"
        fill
        quality={100}
        className="w-full h-full object-cover absolute inset-0 z-[1]"
      />
      {/* <div className="w-full h-full absolute inset-0 bg-blue-800/30 z-[2]"></div> */}
      <div className="w-full h-full flex flex-col md:flex-row justify-center items-center gap-10 relative z-[3]">
        <div className="md:w-2/3 h-auto p-5">
          <div className="w-full md:w-[400px] h-[300px] bg-white p-5 flex flex-col gap-5 justify-center items-start rounded-md drop-shadow-lg text-pretty">
            <p className="text-base">
              The best
              {/* <br /> */}
              <span className="ml-1 border-b-4 border-secondary-light">
                trading experience
              </span>
            </p>
            <h1 className="font-bold text-xl md:text-3xl text-primary">
              iCapitalOne
            </h1>
            <p className="text-base">
              We are a team of passionate individuals, who are dedicated to
              helping you achieve your financial goals.
            </p>
            <button className="p-3 px-12 bg-primary text-white rounded-md relative">
              Get Started
              <span className="w-4 h-4 rounded-full bg-secondary border-2 border-white absolute -top-[6px] -right-[6px]"></span>
              <span className="w-4 h-4 rounded-full bg-secondary opacity-50 border-2 border-white animate-ping absolute -top-[6px] -right-[6px]"></span>
            </button>
          </div>
        </div>
        <div className="md:w-1/3 h-auto p-5 hidden md:invisible">There</div>
      </div>
    </main>
  );
};

export default Hero;

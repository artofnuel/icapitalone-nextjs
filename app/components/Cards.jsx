"use client";
import React from "react";
import { cardData } from "../assets/data";
import Image from "next/image";

const Cards = () => {
  return (
    <main className="w-full min-h-[600px] flex flex-col justify-center items-center bg-background">
      <h5 className="py-10 text-xl font-semibold">
        The Best Trading Experience
      </h5>
      <section className="w-full max-w-5xl mx-auto flex flex-col md:flex-row justify-center items-center gap-8 p-5">
        {cardData.map((item, index) => (
          <button className="w-full md:w-1/2 h-[350px] flex flex-col text-left drop-shadow-lg">
            <div className="w-full h-1/2">
              <Image
                src={item.img}
                alt={item.title}
                className="w-full h-full rounded-t-md"
              />
            </div>
            <div className="w-full h-1/2 flex flex-col gap-2 bg-white p-5 rounded-b-md">
              <p className="text-xl">{item.title}</p>
              <p className="line-clamp-2">{item.desc}</p>
            </div>
          </button>
        ))}
      </section>
    </main>
  );
};

export default Cards;

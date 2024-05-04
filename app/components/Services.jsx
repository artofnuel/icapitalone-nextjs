"use client";
import React from "react";
import { servicesData } from "../assets/data";
import Image from "next/image";
import { IoIosArrowForward } from "react-icons/io";

const Services = () => {
  return (
    <main className="w-full h-auto relative overflow-hidden text-copy">
      <section className="w-full min-h-screen md:h-screen flex flex-col justify-center items-center">
        {servicesData.map((item, index) => (
          <div className="w-full md:h-1/2 flex flex-col md:flex-row md:even:flex-row-reverse">
            <div className="w-full md:w-1/2 h-full">
              <Image
                src={item.img}
                alt={item.title}
                className="object-cover w-full h-full"
              />
            </div>
            <div className="w-full md:w-1/2 h-full flex flex-col justify-center items-start gap-3 p-5 md:p-10">
              <p className="font-semibold">{item.subtitle}</p>
              <h4 className="text-xl md:text-3xl font-light">{item.title}</h4>
              <p className="text-sm">{item.desc}</p>
              <button className="mt-3 flex gap-1 justify-center items-center text-primary font-semibold hover:scale-110 hover:translate-x-2 transition-transform duration-500 ease-in-out">
                Find out more!
                <IoIosArrowForward />
              </button>
            </div>
          </div>
        ))}
      </section>
    </main>
  );
};

export default Services;

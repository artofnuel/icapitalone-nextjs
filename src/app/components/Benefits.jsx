import React from "react";
import { MdOutlinePhonelinkLock } from "react-icons/md";
import { IoIosArrowForward } from "react-icons/io";
import BorderAnimate from "./BorderAnimate";

const Benefits = () => {
  return (
    <main className="w-full h-auto md:h-[500px] flex justify-center items-center p-5">
      <section className="w-full md:max-w-5xl mx-auto flex flex-col md:flex-row justify-center gap-5 items-center">
        <BorderAnimate>
          <div className="p-5 w-full h-[250px] md:h-[350px] flex md:flex-col justify-center items-center gap-5">
            <MdOutlinePhonelinkLock size={80} />
            <div className="text-left md:text-center flex flex-col justify-start items-start md:items-center gap-3 md:gap-5">
              <h2>Security First Standard</h2>
              <p className="">
                Keep your investments growing with the most secure platform in
                the Africa.
              </p>
              <button className="mt-3 flex gap-1 justify-center items-center text-primary font-semibold hover:scale-110 transition-transform duration-500 ease-in-out">
                Safeguard today <IoIosArrowForward />
              </button>
            </div>
          </div>
        </BorderAnimate>
        <BorderAnimate>
          <div className="p-5 w-full h-[250px] md:h-[350px] flex md:flex-col justify-center items-center gap-5">
            <MdOutlinePhonelinkLock size={80} />
            <div className="text-left md:text-center flex flex-col justify-start items-start md:items-center gap-3 md:gap-5">
              <h2>Security First Standard</h2>
              <p className="">
                Keep your investments growing with the most secure platform in
                the Africa.
              </p>
              <button className="mt-3 flex gap-1 justify-center items-center text-primary font-semibold hover:scale-110 transition-transform duration-500 ease-in-out">
                Safeguard today <IoIosArrowForward />
              </button>
            </div>
          </div>
        </BorderAnimate>
        <BorderAnimate>
          <div className="p-5 w-full h-[250px] md:h-[350px] flex md:flex-col justify-center items-center gap-5">
            <MdOutlinePhonelinkLock size={80} />
            <div className="text-left md:text-center flex flex-col justify-start items-start md:items-center gap-3 md:gap-5">
              <h2>Security First Standard</h2>
              <p className="">
                Keep your investments growing with the most secure platform in
                the Africa.
              </p>
              <button className="mt-3 flex gap-1 justify-center items-center text-primary font-semibold hover:scale-110 transition-transform duration-500 ease-in-out">
                Safeguard today <IoIosArrowForward />
              </button>
            </div>
          </div>
        </BorderAnimate>
      </section>
    </main>
  );
};

export default Benefits;

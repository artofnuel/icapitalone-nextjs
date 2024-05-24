import React from "react";

const CallToAct = () => {
  return (
    <main className="w-full h-[250px] flex justify-center items-center">
      <section className="bg-background w-full h-full p-5 flex flex-col gap-1 justify-center items-center">
        <h3 className="font-bold tracking-wide text-lg md:text-3xl text-center">
          Do you have questions about our services?
        </h3>
        <p>we are more than happy to help.</p>
        <button className="relative mt-8 p-3 px-12 rounded-md bg-primary text-white">
          F.A.Q
          <span className="w-4 h-4 rounded-full bg-secondary border-2 border-white absolute -top-[6px] -right-[6px]"></span>
          <span className="w-4 h-4 rounded-full bg-secondary opacity-50 border-2 border-white animate-ping absolute -top-[6px] -right-[6px]"></span>
        </button>
      </section>
    </main>
  );
};

export default CallToAct;

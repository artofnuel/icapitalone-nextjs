"use client";
import useFormStore from "@/app/store/useFormStore";
import React from "react";

const DashHome = () => {
  // const userName = useFormStore((state) => state.formData.name);
  const { name, authUserEmail } = useFormStore();

  return (
    <main className="w-full h-full flex flex-col items-center justify-start gap-5">
      <section className="w-full h-auto p-5 bg-white rounded-md drop-shadow-md">
        <h1 className="text-xl font-bold text-copy-light">
          Welcome, {authUserEmail || name}!
        </h1>
      </section>
      <section className="w-full h-auto md:h-[500px] bg-white p-5 flex justify-center items-center gap-5 rounded-md drop-shadow-md">
        <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 gap-5">
          {[1, 2, 3, 4, 5, 6].map((item, index) => (
            <div
              key={index}
              className="w-full h-[150px] md:h-full drop-shadow-xl rounded-md bg-secondary/40 p-3 flex flex-col gap-2"
            >
              <h2 className="text-base font-bold">Total Deposits</h2>
              <p>$5.00</p>
              <button className="uppercase bg-background text-secondary p-1 px-3 mt-2 rounded-md text-sm">
                Deposit
              </button>
            </div>
          ))}
          <div className="w-full h-[150px] md:h-full drop-shadow-xl col-span-2 rounded-md bg-secondary"></div>
        </div>
      </section>
      <section className="w-full min-h-[250px] bg-white p-5 flex flex-col justify-center items-start gap-5 divide-y-2 rounded-md drop-shadow-md">
        <h2 className="text-left text-xl font-bold text-copy-light">
          Personal Trading History
        </h2>
        <div className="w-full min-h-[50px] text-center flex justify-center items-center p-5">
          <p>Nothing to show yet.</p>
        </div>
        <div className="w-full h-auto text-center flex flex-col gap-5 justify-center items-center p-5">
          <p>Please select a plan to see your trading history.</p>
          <button className="bg-secondary p-3 px-6 rounded-md text-white">
            Get a plan
          </button>
        </div>
      </section>
    </main>
  );
};

export default DashHome;

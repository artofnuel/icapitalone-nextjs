import React from "react";
import Packages from "./components/Packages";

const page = () => {
  return (
    <main className="w-full h-full flex flex-col items-center justify-start gap-5">
      <section className="w-full h-auto p-5 bg-white rounded-md drop-shadow-md">
        <h1 className="text-xl font-bold text-copy-light">Available Plans!</h1>
      </section>
      <Packages />
    </main>
  );
};

export default page;

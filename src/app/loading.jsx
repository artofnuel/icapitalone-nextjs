"use client";
import React from "react";
import { TailSpin } from "react-loader-spinner";

const loading = () => {
  return (
    <main className="w-full h-screen flex justify-center items-center">
      <TailSpin
        visible={true}
        height=""
        width=""
        color="#632cbe"
        ariaLabel="tail-spin-loading"
        radius="1"
        wrapperStyle={{}}
        wrapperClass="w-[200px] h-[200px] flex justify-center items-center"
      />
    </main>
  );
};

export default loading;

import React from "react";

const page = () => {
  return (
    <main className="w-full h-full flex flex-col items-center justify-start gap-5">
      <section className="w-full h-auto p-5 bg-white rounded-md drop-shadow-md">
        <h1 className="text-xl font-bold text-copy-light">Support</h1>
      </section>

      <section className="w-full h-auto md:h-[500px] bg-white p-5 flex flex-col justify-center items-center gap-5 rounded-md drop-shadow-md">
        <h2>Need Assistance?</h2>
        <p>For inquiries, suggestions or complains. Mail us at our email:</p>
      </section>
    </main>
  );
};

export default page;

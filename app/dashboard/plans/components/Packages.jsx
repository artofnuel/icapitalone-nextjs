import React from "react";

const Packages = () => {
  return (
    <main className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-5">
      {[1, 2, 3, 4].map((item, index) => (
        <form action="" key={index}>
          <div className="w-full h-[500px] flex flex-col justify-evenly items-center bg-white rounded-md drop-shadow-lg">
            <h1>Academy Contract</h1>
            <p>$50+</p>
            <p>$50 - $29,999</p>
            <p>At least $60 minimum expected return</p>
            <p>2.86% Daily return</p>
            <p>{`Amount to invest: ($50 default)`}</p>
            <input type="number" name="" id="" placeholder="$50" />
            <p>Select investment duration</p>
            <select
              name="investmentDuration"
              id=""
              className="appearance-none w-10/12 p-3 text-center border border-border rounded-md"
            >
              <option value="One Week" className="p-3">
                One Week
              </option>
            </select>
            <button>Join Plan</button>
          </div>
        </form>
      ))}
    </main>
  );
};

export default Packages;

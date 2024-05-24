"use client";
import React, { useState } from "react";
import { Select } from "antd";

const Packages = () => {
  const durations = [
    { label: 'One Week', value: 'One Week' }
  ];

  const [plan, setPlan] = useState({ duration: null, amount: null });
  const handleChange = (name, value) => {
    setPlan({
      ...plan, [name]: value
    });
  }
  return (
    <main className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-5">
      {[1, 2, 3, 4].map((item, index) => (
        <div action="card" key={index}>
          <div className="w-full p-0 h-[500px] bg-white rounded-md drop-shadow-lg">
            <div className="bg-slate-100 p-4 w-100">
              <span className="text-lg font-bold text-copy">Academy Contract</span>
            </div>
            <div className="p-4 ">
              <p>$50+</p>
              <p>$50 - $29,999</p>
              <p>At least $60 minimum expected return</p>
              <p>2.86% Daily return</p>
              <div className="w-100 my-2">
                <label>Amount to invest: ($50 default)</label>
                <input className="w-100 form-control" type="number" name="" id="" placeholder="$50" onChange={(event) => handleChange("amount", event.target.value)} />
              </div>
              <div className="w-100 my-2">
                <label>Select investment duration</label>
                <Select placeholder="Investment duration" onChange={(value) => handleChange('duration', value)} value={plan.duration} options={durations} className="border-0 form-control w-100" />
              </div>

              <button className="btn btn-outline-primary w-100 mt-3">Join Plan</button>
            </div>
          </div>
        </div>
      ))}
    </main>
  );
};

export default Packages;

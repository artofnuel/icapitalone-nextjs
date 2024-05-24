"use client";
import React, { useState } from "react";
import ImageUpload from "@/components/imageUpload/imageUpload"
import { useRouter } from "next/navigation";
import { validateForm } from "@/utils/validator";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState({
    name: null,
    email: null,
    phone: null,
    investmentType: null,
    password: null,
    inputReferralCode: null
  });

  const handleChange = (name, value) => {
    validateForm("submit")
    setUserData({ ...userData, [name]: value });
  }
  return (
    <main className="w-full h-full flex flex-col items-center justify-start gap-5">
      <section className="w-full h-auto p-3 bg-white rounded-md drop-shadow-md">
        <h1 className="text-xl font-bold text-copy-light">Update Account</h1>
      </section>

      <section className="w-full h-auto md:h-[350px] bg-white p-5 rounded-md drop-shadow-md">
        {/* <ImageUpload /> */}
        <div className="row">
          <div className="col-md-6 col-lg-6 col-12 my-2">
            <label className="form-label">First Name</label>
            <input onChange={(event) => handleChange('last_name', event.target.value)} name="last_name" className="w-full h-auto p-3 border border-border rounded-md" />
          </div>
          <div className="col-md-6 col-lg-6 col-12 my-2">
            <label className="form-label">Last Name</label>
            <input onChange={event => handleChange('first_name', event.target.value)} name="first_name" className="w-full h-auto p-3 border border-border rounded-md" />
          </div>
          <div className="col-md-6 col-lg-6 col-12 my-2">
            <label className="form-label">Email</label>
            <input onChange={(event) => handleChange('email', event.target.value)} type="email" className="w-full h-auto p-3 border border-border rounded-md" />
          </div>
          <div className="col-md-6 col-lg-6 col-12 my-2">
            <label className="form-label">Password</label>
            <input onChange={(event) => handleChange('password', event.target.value)} className="w-full h-auto p-3 border border-border rounded-md" />
          </div>
        </div>
        <div className="d-flex gap-2 my-3">
          <button className="btn btn-primary">Submit</button>
          <btn className="btn btn-outline-primary">Cancel</btn>
        </div>
      </section>
    </main>
  );
};

export default Page;

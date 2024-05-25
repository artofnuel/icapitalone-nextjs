"use client";
import useFormStore from "@/app/store/useFormStore";
import { validateForm } from "@/utils/validator";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState, useEffect } from "react";
import { FaUser, FaPhone, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { InfinitySpin } from "react-loader-spinner";
import { Select } from "antd";
import { useAccountStore } from "@/store/accountStore";
import { type User } from "@/interfaces";
import { useMainStore } from "@/store";

const Page = () => {
  const investTypes = [
    { value: "Stocks" },
    { value: "Bonds" },
    { value: "Real Estate" },
    { value: "Gold Market" },
    { value: "Cryptocurrency" },
    { value: "Forex" },
  ];
  // hooks
  const router = useRouter();

  // stores
  const { register } = useAccountStore();
  const { checkAuth } = useMainStore();


  const [loading, setLoading] = useState(false);
  const [userData, setUserData] = useState<User>({
    name: '',
    email: '',
    phone: '',
    investmentType: null,
    password: '',
    inputReferralCode: null
  });

  const handleChange = (name: string, value: any) => {
    validateForm("submit")
    setUserData({ ...userData, [name]: value });
  }
  const handleSubmit = () => {
    register(userData).then((signedUp) => {
      if (signedUp) {
        setTimeout(() => {
          checkAuth();
          router.push("/dashboard");
        }, 100);
      }
    })
  };

  useEffect(() => {
    validateForm("submit");
  });

  return (
    <main className="w-full min-h-screen bg-white flex flex-col justify-center items-center">
      <div
        className="w-full p-5 bg-white rounded-md flex flex-col justify-center items-center gap-4"
      >
        <div className="w-9/12 h-auto mx-auto relative flex justify-center items-center flex-col">
          <i className="absolute right-4 text-copy-lighter/50">
            <FaUser />
          </i>
          <input
            required
            type="text"
            name="name"
            value={userData.name}
            onChange={(event) => handleChange('name', event.target.value)}
            placeholder="Full Name"
            className="form-control w-full h-auto p-3 border border-border rounded-md"
          />
        </div>
        <div className="w-9/12 h-auto mx-auto relative flex justify-center items-center flex-col">
          <i className="absolute right-4 text-copy-lighter/50">
            <MdEmail />
          </i>
          <input
            required
            type="email"
            name="email"
            value={userData.email}
            onChange={(event) => handleChange('email', event.target.value)}
            placeholder="Email Address"
            className="form-control w-full h-auto p-3 border border-border rounded-md"
          />
        </div>
        <div className="w-9/12 h-auto mx-auto relative flex justify-center items-center flex-col">
          <i className="absolute right-4 text-copy-lighter/50">
            <FaPhone />
          </i>
          <input
            required
            type="tel"
            name="phone"
            value={userData.phone}
            onChange={(event) => handleChange('phone', event.target.value)}
            placeholder="Phone Number"
            className="form-control w-full h-auto p-3 border border-border rounded-md"
          />
        </div>

        <div className="w-9/12 h-auto mx-auto relative flex justify-center items-center flex-col">
          <Select className="form-control w-full h-auto p-3 border-none" onChange={(value) => handleChange('investmentType', value)} value={userData.investmentType} options={investTypes} />
        </div>
        <div className="w-9/12 h-auto mx-auto relative flex justify-center items-center flex-col">
          <i className="absolute right-4 text-copy-lighter/50">
            <FaLock />
          </i>
          <input
            required
            type="password"
            name="password"
            value={userData.password}
            onChange={(event) => handleChange('password', event.target.value)}
            placeholder="Password"
            className="form-control w-full h-auto p-3 border border-border rounded-md"
          />
        </div>
        <div className="w-9/12 h-auto mx-auto relative flex justify-center items-center flex-col">
          <i className="absolute right-4 text-copy-lighter/50">
            <FaLock />
          </i>
          <input
            type="text"
            name="inputReferralCode"
            value={userData.inputReferralCode}
            onChange={(event) => handleChange('inputReferralCode', event.target.value)}
            placeholder="Referral Code"
            className="form-control w-full h-auto p-3 border border-border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-9/12 p-3 btn btn-primary"
          id="submit"
          onClick={handleSubmit}
        >
          Register
        </button>
        <p className="">
          Already have an account?
          <Link href="/login" className="ml-2 text-primary-light">
            Login here
          </Link>
        </p>
      </div>
    </main>
  );
};

export default Page;

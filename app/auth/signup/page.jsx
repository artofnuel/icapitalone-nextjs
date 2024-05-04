"use client";
import useFormStore from "@/app/store/useFormStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { FaUser, FaPhone, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { InfinitySpin } from "react-loader-spinner";

const Page = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const {
    name,
    email,
    phone,
    investmentType,
    password,
    inputReferralCode,
    setFormData,
    resetFormData,
  } = useFormStore();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    const formData = {
      name,
      email,
      phone,
      investmentType,
      password,
      inputReferralCode,
    };

    // Check if any required fields are empty
    if (
      formData.name === "" ||
      formData.email === "" ||
      formData.phone === "" ||
      formData.password === "" ||
      formData.inputReferralCode === ""
    ) {
      alert("Please fill in all required fields.");
      setLoading(false);
      return; // Prevent form submission
    }

    try {
      const response = await fetch(
        "https://icapitalone.up.railway.app/auth/signup",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify(formData),
        }
      );

      const responseData = await response.json();

      if (response.ok) {
        console.log("Signup successful!");
        console.log("Response data:", responseData);
        router.push("/dashboard");
        resetFormData();
      } else {
        console.error("Error during signup:", responseData);
      }
    } catch (error) {
      console.error("Error during signup:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData(name, value);
  };

  return (
    <main className="w-full min-h-screen bg-white flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full p-5 bg-white rounded-md flex flex-col justify-center items-center gap-4"
      >
        <div className="w-9/12 h-auto mx-auto relative flex justify-center items-center">
          <i className="absolute right-4 text-copy-lighter/50">
            <FaUser />
          </i>
          <input
            type="text"
            name="name"
            value={name}
            onChange={handleChange}
            placeholder="Full Name"
            className="w-full h-auto p-3 border border-border rounded-md"
          />
        </div>
        <div className="w-9/12 h-auto mx-auto relative flex justify-center items-center">
          <i className="absolute right-4 text-copy-lighter/50">
            <MdEmail />
          </i>
          <input
            type="email"
            name="email"
            value={email}
            onChange={handleChange}
            placeholder="Email Address"
            className="w-full h-auto p-3 border border-border rounded-md"
          />
        </div>
        <div className="w-9/12 h-auto mx-auto relative flex justify-center items-center">
          <i className="absolute right-4 text-copy-lighter/50">
            <FaPhone />
          </i>
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="w-full h-auto p-3 border border-border rounded-md"
          />
        </div>

        <select
          name="investmentType"
          value={investmentType}
          onChange={handleChange}
          className="w-9/12 h-auto p-3 border border-border rounded-md appearance-none"
          placeholder="Select Investment"
        >
          <optgroup label="Select Investment" className="text-copy-lighter">
            <option className="text-copy" value="Stocks">
              Stocks
            </option>
            <option className="text-copy" value="Bonds">
              Bonds
            </option>
            <option className="text-copy" value="Real Estate">
              Real Estate
            </option>
            <option className="text-copy" value="Gold Market">
              Gold Market
            </option>
            <option className="text-copy" value="Cryptocurrency">
              Cryptocurrency
            </option>
            <option className="text-copy" value="Forex">
              Forex
            </option>
          </optgroup>
        </select>
        <div className="w-9/12 h-auto mx-auto relative flex justify-center items-center">
          <i className="absolute right-4 text-copy-lighter/50">
            <FaLock />
          </i>
          <input
            type="password"
            name="password"
            value={password}
            onChange={handleChange}
            placeholder="Password"
            className="w-full h-auto p-3 border border-border rounded-md"
          />
        </div>
        <div className="w-9/12 h-auto mx-auto relative flex justify-center items-center">
          <i className="absolute right-4 text-copy-lighter/50">
            <FaLock />
          </i>
          <input
            type="text"
            name="inputReferralCode"
            value={inputReferralCode}
            onChange={handleChange}
            placeholder="Referral Code"
            className="w-full h-auto p-3 border border-border rounded-md"
          />
        </div>

        <button
          type="submit"
          className="w-9/12 h-12 bg-primary-light flex flex-col justify-center items-center rounded-md text-white"
        >
          {loading ? (
            <div className="pr-8">
              <InfinitySpin
                visible={true}
                width="100"
                color="#fff"
                ariaLabel="infinity-spin-loading"
              />
            </div>
          ) : (
            "Register"
          )}
        </button>
        <p className="">
          Already have an account?
          <Link href="/auth/login" className="ml-2 text-primary-light">
            Login here
          </Link>
        </p>
      </form>
    </main>
  );
};

export default Page;

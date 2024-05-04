"use client";
import useFormStore from "@/app/store/useFormStore";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaUser, FaPhone, FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const Page = () => {
  const router = useRouter();
  const {
    name,
    email,
    phone,
    investmentType,
    password,
    inputReferralCode,
    setFormData,
  } = useFormStore();

  const handleSubmit = async (e) => {
    e.preventDefault();

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
      return; // Prevent form submission
    }

    try {
      const response = await fetch(
        // "http://localhost:3020/auth/signup" ||
        // "http://127.0.0.1:3020/auth/signup",
        "http://127.0.0.1:3020/auth/signup",
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
      } else {
        console.error("Error during signup:", responseData);
      }
    } catch (error) {
      console.error("Error during signup:", error);
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
          className="w-9/12 h-auto p-3 border-2 border-primary-light rounded-md text-primary-light hover:text-white hover:bg-primary-light transition-all duration-300 ease-in-out"
        >
          Register
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

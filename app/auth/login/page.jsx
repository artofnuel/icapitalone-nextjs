import Link from "next/link";
import React from "react";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";

const page = () => {
  return (
    <main className="w-full min-h-screen bg-white flex flex-col justify-center items-center">
      <form
        action=""
        className="w-full p-5 bg-white rounded-md flex flex-col justify-center items-center gap-4"
      >
        <div className="w-10/12 h-auto mx-auto relative flex justify-center items-center">
          <i className="absolute right-4">
            <MdEmail />
          </i>
          <input
            type="email"
            name="Email Address"
            id=""
            placeholder="Email Address"
            className="w-full h-auto p-3 border border-border rounded-md"
          />
        </div>

        <div className="w-10/12 h-auto mx-auto relative flex justify-center items-center">
          <i className="absolute right-4">
            <FaLock />
          </i>
          <input
            type="password"
            name="Password"
            id=""
            placeholder="Password"
            className="w-full h-auto p-3 border border-border rounded-md"
          />
        </div>
        <div className="w-10/12 flex justify-between md:justify-center items-center gap-5">
          <label
            htmlFor=""
            className="flex justify-center items-center gap-2 text-copy-lighter/70"
          >
            <input
              type="checkbox"
              name="remember me"
              id=""
              className="w-5 h-5 rounded-full border-2 border-primary-light appearance-none checked:bg-primary"
            />{" "}
            Remember me
          </label>
          <Link href="/forgot-password" className="text-primary-light">
            Forgot Password?
          </Link>
        </div>

        <button className="w-10/12 h-auto p-3 border-2 border-primary-light rounded-md text-primary-light hover:text-white hover:bg-primary-light transition-all duration-300 ease-in-out">
          Login
        </button>
        <p className="flex flex-col md:flex-row justify-center items-center">
          {`Don't have an account?`}
          <Link href="/sign-up" className="ml-2 text-primary-light">
            Create Account
          </Link>
        </p>
      </form>
    </main>
  );
};

export default page;

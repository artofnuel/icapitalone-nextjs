"use client";
// In your login page component:
import { useState } from "react";
import { useRouter } from "next/navigation"; // Corrected import statement
import Link from "next/link";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { InfinitySpin } from "react-loader-spinner";

const LoginPage = () => {
  const router = useRouter();
  const [loading, setLoading] = useState(false);

  const [authData, setAuthData] = useState({
    email: null,
    password: null
  });
  const handleChange = (name, value) => {
    setAuthData({ ...authData, [name]: value })
  }
  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-center items-center">
      <div
        className="w-full p-5 bg-white rounded-md flex flex-col justify-center items-center gap-4"
      >
        <div className="w-10/12 h-auto mx-auto relative flex justify-center items-center">
          <i className="absolute right-4">
            <MdEmail />
          </i>
          <input
            type="email"
            name="email"
            value={authData.email}
            onChange={(e) => handleChange("email", e.target.value)}
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
            name="password"
            value={authData.password}
            onChange={(e) => handleChange("password", e.target.value)}
            placeholder="Password"
            className="w-full h-auto p-3 border border-border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="btn btn-primary w-10/12 p-3"
          disabled={loading} // Disable button when loading
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
            "Login"
          )}
        </button>
        <p className="flex flex-col md:flex-row justify-center items-center">
          {`Don't have an account? `}
          <Link href="/signup" className="ml-2 text-primary-light">
            <span>Create Account</span>
          </Link>
        </p>
      </div>
    </div>
  );
};

export default LoginPage;

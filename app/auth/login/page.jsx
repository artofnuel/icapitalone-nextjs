"use client";
// In your login page component:
import { useState } from "react";
import { useRouter } from "next/navigation"; // Changed from next/navigation
import Link from "next/link";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import useFormStore from "@/app/store/useFormStore";

const LoginPage = () => {
  const router = useRouter();
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    const { email: storedEmail, password: storedPassword } =
      useFormStore.getState();

    if (userEmail === storedEmail && userPassword === storedPassword) {
      console.log("Login successful!");
      // Redirect to dashboard on successful login
      router.push("/dashboard");
    } else {
      console.error("Error during login: Incorrect email or password");
      alert("Login failed. Please check your email and password.");
    }
  };

  return (
    <main className="w-full min-h-screen bg-white flex flex-col justify-center items-center">
      <form
        onSubmit={handleSubmit}
        className="w-full p-5 bg-white rounded-md flex flex-col justify-center items-center gap-4"
      >
        <div className="w-10/12 h-auto mx-auto relative flex justify-center items-center">
          <i className="absolute right-4">
            <MdEmail />
          </i>
          <input
            type="email"
            name="email"
            value={userEmail}
            onChange={(e) => setUserEmail(e.target.value)}
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
            value={userPassword}
            onChange={(e) => setUserPassword(e.target.value)}
            placeholder="Password"
            className="w-full h-auto p-3 border border-border rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-10/12 h-auto p-3 border-2 border-primary-light rounded-md text-primary-light hover:text-white hover:bg-primary-light transition-all duration-300 ease-in-out"
        >
          Login
        </button>
        <p className="flex flex-col md:flex-row justify-center items-center">
          {`Don't have an account?`}
          <Link href="/auth/signup" className="ml-2 text-primary-light">
            Create Account
          </Link>
        </p>
      </form>
    </main>
  );
};

export default LoginPage;

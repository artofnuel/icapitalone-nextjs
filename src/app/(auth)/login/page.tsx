"use client";
import { useState, ChangeEvent, useEffect } from "react";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { FaLock } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { InfinitySpin } from "react-loader-spinner";
import { useAccountStore } from "@/store/accountStore";
import { useMainStore } from "@/store";
import { validateForm } from "@/utils/validator"

interface Credentials {
  email: string;
  password: string;
}

export default function LoginPage() {
  // hooks
  const router = useRouter();

  // stores
  const { login } = useAccountStore();
  const { checkAuth } = useMainStore();
  // data
  const [credential, setCredential] = useState<Credentials>({
    email: '',
    password: ''
  });

  // function
  const handleChange = (name: string, value: string) => {
    validateForm("login");
    setCredential({ ...credential, [name]: value });
  };

  const loginUser = () => {
    login(credential).then((loggedIn) => {
      if (loggedIn) {
        setTimeout(() => {
          checkAuth();
          router.push("/dashboard");
        }, 100);
      }
    });
  };

  useEffect(() => {
    validateForm("login");
  });
  return (
    <div className="w-full min-h-screen bg-white flex flex-col justify-center items-center">
      <div className="w-full p-5 bg-white rounded-md flex flex-col justify-center items-center gap-4">
        <div className="w-10/12 h-auto mx-auto relative">
          <i className="absolute right-4 top-5">
            <MdEmail />
          </i>
          <input
          required
            type="email"
            name="email"
            value={credential.email}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("email", e.target.value)}
            placeholder="Email Address"
            className="w-full h-auto p-3 border border-border rounded-md"
          />
        </div>

        <div className="w-10/12 h-auto mx-auto relative">
          <i className="absolute right-4 top-5">
            <FaLock />
          </i>
          <input
          required
            type="password"
            name="password"
            value={credential.password}
            onChange={(e: ChangeEvent<HTMLInputElement>) => handleChange("password", e.target.value)}
            placeholder="Password"
            className="w-full h-auto p-3 border border-border rounded-md"
          />
        </div>

        <div className="w-10/12 h-auto mx-auto">
          <div className="d-flex justify-content-end mb-0 w-100">
            <Link href="/forgot-password" className="ml-2 text-primary-light mb-1">
              <span>Forgot Password</span>
            </Link>
          </div>
          <button
            type="submit"
            id="login"
            className=" d-block btn btn-primary w-100 p-3"
            onClick={loginUser}
          >
            Login
          </button>
        </div>

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

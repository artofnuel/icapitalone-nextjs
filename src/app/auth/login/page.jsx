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
  const [userEmail, setUserEmail] = useState("");
  const [userPassword, setUserPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await fetch(
        "https://icapitalone.up.railway.app/auth/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ email: userEmail, password: userPassword }),
        }
      );

      if (!response.ok) {
        throw new Error("Failed to authenticate");
      }

      const responseData = await response.json();

      // Assuming the response contains a success flag and user data
      if (responseData.success) {
        console.log("Login successful!");
        setLoading(false);
        // Redirect to dashboard on successful login
        router.push("/dashboard");
      } else {
        setLoading(false);
        console.error("Error during login:", responseData.error);
        alert("Login failed. Please check your email and password.");
      }
    } catch (error) {
      setLoading(false);
      console.error("Error during login:", error.message);
      alert("Login failed. Please try again later.");
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
          className={`w-10/12 h-12 bg-primary-light flex flex-col justify-center items-center rounded-md text-white`}
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
          <Link href="/auth/signup" className="ml-2 text-primary-light">
            <span>Create Account</span>
          </Link>
        </p>
      </form>
    </main>
  );
};

export default LoginPage;

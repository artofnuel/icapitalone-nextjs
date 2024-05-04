"use client";
import Link from "next/link";
import { FiHome, FiList, FiLogOut } from "react-icons/fi";
import useFormStore from "@/app/store/useFormStore"; // Import the Zustand store

const SideBar = () => {
  const resetForm = useFormStore((state) => state.resetFormData); // Get the resetFormData function

  const handleLogout = () => {
    resetForm(); // Reset the form data when logging out
    // Additional logout logic (e.g., clearing session, redirecting, etc.)
  };

  return (
    <main className="md:block md:w-[150px] min-h-screen bg-copy text-white py-5">
      <div className="w-full h-full min-h-screen flex flex-col justify-start items-center gap-6">
        <Link
          className="w-full flex gap-3 p-4 hover:bg-copy-light/20"
          href="/dashboard"
        >
          <FiHome size={25} />
          <p className="hidden md:block">Home</p>
        </Link>
        <Link
          className="w-full flex gap-3 p-4 hover:bg-copy-light/20"
          href="/dashboard/plans"
        >
          <FiList size={25} />
          <p className="hidden md:block">Plans</p>
        </Link>
        <Link
          href="/auth/login"
          className="w-full flex gap-3 p-4 hover:bg-copy-light/20"
          onClick={handleLogout}
        >
          <FiLogOut size={25} />
          <p className="hidden md:block">Logout</p>
        </Link>
      </div>
    </main>
  );
};

export default SideBar;

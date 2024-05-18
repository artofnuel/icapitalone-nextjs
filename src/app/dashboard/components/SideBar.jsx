"use client";
import Link from "next/link";
import { FiList, FiLogOut } from "react-icons/fi";
import { CgHomeAlt } from "react-icons/cg";
import { LuUser } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { RiLineChartLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { BiMoneyWithdraw } from "react-icons/bi";
import { TbAffiliate } from "react-icons/tb";
import useFormStore from "@/app/store/useFormStore"; // Import the Zustand store

const SideBar = () => {
  const resetForm = useFormStore((state) => state.resetFormData); // Get the resetFormData function

  const handleLogout = () => {
    resetForm(); // Reset the form data when logging out
    // Additional logout logic (e.g., clearing session, redirecting, etc.)
  };

  return (
    <main className="md:block md:w-[200px] min-h-screen bg-copy text-white py-5">
      <div className="w-full h-full min-h-screen flex flex-col justify-start items-center gap-6">
        <Link
          className="w-full flex gap-3 p-4 hover:bg-copy-light/20"
          href="/dashboard"
        >
          <CgHomeAlt size={25} className="p-1 bg-white/10 rounded-full" />
          <p className="hidden md:block">Dashboard</p>
        </Link>
        <Link
          className="w-full flex gap-3 p-4 hover:bg-copy-light/20"
          href="/dashboard/account"
        >
          <LuUser size={25} className="p-1 bg-white/10 rounded-full" />
          <p className="hidden md:block">Account</p>
        </Link>
        <Link
          className="w-full flex gap-3 p-4 hover:bg-copy-light/20"
          href="/dashboard/support"
        >
          <CiMail size={25} className="p-1 bg-white/10 rounded-full" />
          <p className="hidden md:block">Support</p>
        </Link>
        <Link
          className="w-full flex gap-3 p-4 hover:bg-copy-light/20"
          href="/dashboard/transactions"
        >
          <RiLineChartLine size={25} className="p-1 bg-white/10 rounded-full" />
          <p className="hidden md:block">Transactions</p>
        </Link>
        <Link
          className="w-full flex gap-3 p-4 hover:bg-copy-light/20"
          href="/dashboard/deposits"
        >
          <IoWalletOutline size={25} className="p-1 bg-white/10 rounded-full" />
          <p className="hidden md:block">Deposits</p>
        </Link>
        <Link
          className="w-full flex gap-3 p-4 hover:bg-copy-light/20"
          href="/dashboard/withdrawal"
        >
          <BiMoneyWithdraw size={25} className="p-1 bg-white/10 rounded-full" />
          <p className="hidden md:block">Withdrawal</p>
        </Link>
        <Link
          className="w-full flex gap-3 p-4 hover:bg-copy-light/20"
          href="/dashboard/plans"
        >
          <FiList size={25} className="p-1 bg-white/10 rounded-full" />
          <p className="hidden md:block">Plans</p>
        </Link>
        <Link
          className="w-full flex gap-3 p-4 hover:bg-copy-light/20"
          href="/dashboard/referrals"
        >
          <TbAffiliate size={25} className="p-1 bg-white/10 rounded-full" />
          <p className="hidden md:block">Refer Users</p>
        </Link>
        <Link
          href="/auth/login"
          className="w-full flex gap-3 p-4 hover:bg-copy-light/20"
          // onClick={handleLogout}
        >
          <FiLogOut size={25} className="p-1 bg-white/10 rounded-full" />
          <p className="hidden md:block">Logout</p>
        </Link>
      </div>
    </main>
  );
};

export default SideBar;

"use client";
import React from "react";
import { NavLinks } from "./NavLinks";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { HiMenuAlt3 } from "react-icons/hi";
import SideBar from "../dashboard/components/SideBar";

const Navbar = () => {
  const pathname = usePathname();
  return (
    <header className="w-full h-auto relative z-50 p-5 text-copy bg-white">
      <nav className="w-full h-auto flex justify-between items-center">
        <Link
          href="/"
          className="w-full font-bold text-xl md:text-3xl text-primary"
        >
          iCapitalOne
        </Link>
        <div className="hidden w-full md:flex justify-center items-center">
          {pathname === "/dashboard" ? null : <NavLinks />}
        </div>
        <div className="w-full flex gap-1 justify-end items-center">
          {pathname === "/dashboard" ? (
            <div className="relative">{/* <HiMenuAlt3 size={25} /> */}</div>
          ) : (
            <>
              <Link
                href="/auth/signup"
                className="text-primary font-semibold tracking-wide p-2"
              >
                Sign Up
              </Link>
              <Link
                href="/auth/login"
                className="text-primary font-semibold tracking-wide p-2 border border-primary rounded-md"
              >
                Log In
              </Link>
            </>
          )}
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

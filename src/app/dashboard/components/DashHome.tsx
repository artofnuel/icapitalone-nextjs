"use client";
import React, { useEffect } from "react";
import styles from "./styles.module.css";
import { useAccountStore } from "@/store/accountStore";
import Link from "next/link";

const DashHome = () => {
  // stores
  const { user, wallet, fetchWalletBalance } = useAccountStore();

  useEffect(() => {
    fetchWalletBalance();
  }, []);

  return (
    <main className="w-full h-full flex flex-col items-center justify-start gap-5">
      <section className="w-full h-auto p-3 bg-white rounded-md drop-shadow-md">
        <h1 className="text-xl font-bold text-copy-light">
          Welcome, {user?.name}!
        </h1>
      </section>
      <section className="w-full h-auto md:h-[500px] bg-white p-5 flex justify-center items-center gap-5 rounded-md drop-shadow-md">
        <div className="w-full h-full grid grid-cols-2 md:grid-cols-4 gap-5">
          {[1].map((item, index) => (
            <div
              key={index}
              style={{
                borderWidth: '1px'
              }}
              className={`w-full h-[150px] md:h-full drop-shadow-xl rounded-md p-3 flex flex-col gap-2 border-1 border-primary ${styles.dashboardInfoCard}`}
            >
              <h2 className="text-base font-bold">Total Deposits</h2>
              <p>${wallet?.balance}</p>
              <Link href="/dashboard/deposit/payment" className="uppercase btn btn-sm btn-primary">
                Deposit
              </Link>
            </div>
          ))}
          {/* <div className="w-full h-[150px] md:h-full drop-shadow-xl col-span-2 rounded-md bg-secondary"></div> */}
        </div>
      </section>
      <section className="w-full min-h-[250px] bg-white p-3 flex flex-col justify-center items-start gap-5 divide-y-2 rounded-md drop-shadow-md">
        <h2 className="text-left text-xl font-bold text-copy-light">
          Personal Trading History
        </h2>
        <div className="w-full min-h-[50px] text-center flex justify-center items-center p-5">
          <p>Nothing to show yet.</p>
        </div>
        <div className="w-full h-auto text-center p-5">
          <span className="d-block mb-3 ">Please select a plan to see your trading history.</span>
          <button className="btn btn-outline-primary">
            Get a plan
          </button>
        </div>
      </section>
    </main>
  );
};

export default DashHome;

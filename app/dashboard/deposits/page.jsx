import Link from "next/link";
import React from "react";
import { FaPlus } from "react-icons/fa";

const page = () => {
  const transactions = [
    {
      id: 1,
      amount: 100,
      payment: "Credit",
      status: "Success",
      dateCreated: "2024-05-13",
    },
    {
      id: 2,
      amount: 50,
      payment: "Debit",
      status: "Success",
      dateCreated: "2024-05-12",
    },
    {
      id: 3,
      amount: 30,
      payment: "Credit",
      status: "Success",
      dateCreated: "2024-05-11",
    },
    // Add more dummy data as needed
  ];
  return (
    <main className="w-full h-full flex flex-col items-center justify-start gap-5">
      <section className="w-full h-auto p-5 bg-white rounded-md drop-shadow-md">
        <h1 className="text-xl font-bold text-copy-light">Deposits</h1>
      </section>

      <section className="w-full h-auto bg-white p-5 flex flex-col justify-center items-center gap-5 rounded-md drop-shadow-md">
        <Link
          href="/dashboard/deposits/payment"
          className="p-3 border-border bg-background rounded-md flex gap-3 justify-center items-center"
        >
          <FaPlus /> Make a payment
        </Link>
        <div className="w-full h-full overflow-x-auto">
          <table className="w-full border-collapse border border-gray-200">
            <thead>
              <tr className="bg-gray-100">
                <th className="p-2 border border-gray-200">ID</th>
                <th className="p-2 border border-gray-200">Plan</th>
                <th className="p-2 border border-gray-200">Amount</th>
                <th className="p-2 border border-gray-200">Type</th>
                <th className="p-2 border border-gray-200">Date Created</th>
              </tr>
            </thead>
            <tbody>
              {transactions.map((transaction) => (
                <tr key={transaction.id}>
                  <td className="p-2 border border-gray-200">
                    {transaction.id}
                  </td>
                  <td className="p-2 border border-gray-200">
                    {transaction.plan}
                  </td>
                  <td className="p-2 border border-gray-200">
                    {transaction.amount}
                  </td>
                  <td className="p-2 border border-gray-200">
                    {transaction.type}
                  </td>
                  <td className="p-2 border border-gray-200">
                    {transaction.dateCreated}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </main>
  );
};

export default page;

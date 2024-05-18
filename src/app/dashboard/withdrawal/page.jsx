import React from "react";
import { FaPlus } from "react-icons/fa";

const page = () => {
  const transactions = [
    {
      id: 1,
      amount: 100,
      charges: 10,
      type: "Credit",
      status: "success!",
      dateCreated: "2024-05-13",
    },
    {
      id: 2,
      amount: 50,
      charges: 10,
      type: "Debit",
      status: "Debit",
      dateCreated: "2024-05-12",
    },
    {
      id: 3,
      amount: 30,
      charges: 10,
      type: "Credit",
      status: "Credit",
      dateCreated: "2024-05-11",
    },
    // Add more dummy data as needed
  ];

  return (
    <main className="w-full h-full flex flex-col items-center justify-start gap-5">
      <section className="w-full h-auto p-5 bg-white rounded-md drop-shadow-md">
        <h1 className="text-xl font-bold text-copy-light">Withdrawal</h1>
      </section>

      <section className="w-full h-auto bg-white p-5 flex flex-col justify-center items-center gap-5 rounded-md drop-shadow-md">
        <main className="w-full h-full grid grid-cols-1 md:grid-cols-3 gap-5">
          {[1, 2, 3, 4].map((item, index) => (
            <form action="" key={index}>
              <div className="w-full h-[500px] flex flex-col justify-evenly items-center bg-white rounded-md drop-shadow-lg">
                <h1 className="text-xl font-bold">Bitcoin</h1>
                <p>Maximum Withdrawable: $50+</p>
                <p>Charges: $0</p>
                <p>Duration: 24 - 48 hours</p>
                <p>2.86% Daily return</p>

                <button className="p-3 border-border bg-background rounded-md flex gap-3 justify-center items-center">
                  <FaPlus /> Request withdrawal
                </button>
              </div>
            </form>
          ))}
        </main>
      </section>

      <div className="w-full h-full overflow-x-auto">
        <table className="w-full border-collapse border border-gray-200">
          <thead>
            <tr className="bg-gray-100">
              <th className="p-2 border border-gray-200">ID</th>
              <th className="p-2 border border-gray-200">Amount requested</th>
              <th className="p-2 border border-gray-200">Amount + charges</th>
              <th className="p-2 border border-gray-200">Recieving mode</th>
              <th className="p-2 border border-gray-200">Status</th>
              <th className="p-2 border border-gray-200">Date created</th>
            </tr>
          </thead>
          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id}>
                <td className="p-2 border border-gray-200">{transaction.id}</td>
                <td className="p-2 border border-gray-200">
                  {transaction.charges}
                </td>
                <td className="p-2 border border-gray-200">
                  {transaction.amount}
                </td>
                <td className="p-2 border border-gray-200">
                  {transaction.type}
                </td>
                <td className="p-2 border border-gray-200">
                  {transaction.status}
                </td>
                <td className="p-2 border border-gray-200">
                  {transaction.dateCreated}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </main>
  );
};

export default page;

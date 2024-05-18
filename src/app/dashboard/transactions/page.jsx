import React from "react";

// Dummy transaction data
const transactions = [
  {
    id: 1,
    plan: "Gold",
    amount: 100,
    type: "Credit",
    dateCreated: "2024-05-13",
  },
  {
    id: 2,
    plan: "Silver",
    amount: 50,
    type: "Debit",
    dateCreated: "2024-05-12",
  },
  {
    id: 3,
    plan: "Bronze",
    amount: 30,
    type: "Credit",
    dateCreated: "2024-05-11",
  },
  // Add more dummy data as needed
];

const Page = () => {
  return (
    <main className="w-full h-full flex flex-col items-center justify-start gap-5">
      <section className="w-full h-auto p-5 bg-white rounded-md drop-shadow-md">
        <h1 className="text-xl font-bold text-copy-light">Transaction</h1>
      </section>

      <section className="w-full h-auto bg-white p-5 rounded-md drop-shadow-md">
        <div className="overflow-x-auto">
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

export default Page;

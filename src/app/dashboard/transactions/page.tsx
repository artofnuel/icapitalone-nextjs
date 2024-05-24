"use client";
import React from "react";
import { Table } from "antd";

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

const columns = [
  {
    title: 'ID',
    dataIndex: 'id'
  },
  {
    title: 'Plan',
    dataIndex: 'plan'
  },
  {
    title: 'Amount',
    dataIndex: 'amount'
  },
  {
    title: 'Type',
    dataIndex: 'type'
  },
  {
    title: 'Date Created',
    dataIndex: 'dateCreated'
  }
];
const Page = () => {
  return (
    <main className="w-full h-full flex flex-col items-center justify-start gap-5">
      <section className="w-full h-auto p-3 bg-white rounded-md drop-shadow-md">
        <h1 className="text-xl font-bold text-copy-light">Transaction</h1>
      </section>
      <Table className="w-100" columns={columns} dataSource={transactions}></Table>
      
    </main>
  );
};

export default Page;

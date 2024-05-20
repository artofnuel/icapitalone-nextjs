"use client";
import Link from "next/link";
import React from "react";
import { Table } from "antd";
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
  const columns = [
    {
      title: 'ID',
      dataIndex: 'id'
    },
    {
      title: 'Amount',
      dataIndex: 'amount'
    },
    {
      title: 'Type',
      dataIndex: 'payment'
    },
    {
      title: 'Statue',
      dataIndex: 'status'
    },
    {
      title: 'Date Created',
      dataIndex: 'dateCreated'
    }
  ];
  return (
    <main className="w-full h-full flex flex-col items-center justify-start gap-5">
      <section className="w-full h-auto p-3 bg-white rounded-md drop-shadow-md">
        <h1 className="text-xl font-bold text-copy-light">Deposits</h1>
      </section>

      <section className="w-full h-auto bg-white p-3 flex flex-col justify-center items-start gap-5 rounded-md drop-shadow-md">
        <Link
          href="/dashboard/deposits/payment"
          className="p-3 border-border bg-background rounded-md flex gap-3 justify-center items-center"
        >
          <FaPlus /> Make a payment
        </Link>

        <Table className="w-100" columns={columns} dataSource={transactions}></Table>
       
      </section>
    </main>
  );
};

export default page;

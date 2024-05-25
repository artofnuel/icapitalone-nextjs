"use client";
import Link from "next/link";
import React, { useEffect } from "react";
import { Table } from "antd";
import { FaPlus } from "react-icons/fa";
import { useDepositStore } from "@/store/finance/depositStore";
import { formatAmount, formatDate } from "@/utils/formaters"
import { Deposit } from "@/interfaces";
import { ColumnsType } from "antd/es/table";
const page = () => {
  // stores
  const { fetchDeposits, deposits } = useDepositStore();

  const columns: ColumnsType<Deposit> = [
    {
      title: 'S/N',
      render: (_: any, record: any, index: number) => index + 1,
    },
    {
      title: 'Amount',
      render: (_: any, record: { amount: any; }, index: any) => formatAmount(record.amount),
    },
    {
      title: 'Method',
      dataIndex: 'paymentMethod'
    },
    {
      title: 'Status',
      dataIndex: 'status'
    },
    {
      title: 'Date Created',
      render: (_: any, record: Deposit, index: any) => formatDate(record.paymentDate),
    }
  ];

  useEffect(() => {
    fetchDeposits();
  }, [])
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

        <Table className="w-100" columns={columns} dataSource={deposits}></Table>

      </section>
    </main>
  );
};

export default page;

"use client";
import PaymentCard from "@/components/paymentCard/paymentCard";
import React, { useState } from "react";
import { Select } from "antd";
import ImageUpload from "@/components/imageUpload/imageUpload";
import { useDepositStore } from "@/store/finance/depositStore";
import { type Deposit } from "@/interfaces";
import { useRouter } from "next/navigation";

export default function () {
  // stores
  const { makePayment } = useDepositStore();

  // hooks
  const router = useRouter();

  const paymentMethods = [
    { value: "Bank Transfer" },
    { value: "Ethereum" },
    { value: "Bitcoin" },
    { value: "Credit Card" },
  ];
  const depositMethods = [
    {
      title: 'BTC - Bitcoin',
      message: 'You can deposit by sending BTC to this Address:',
      address: '3MAhdmmGm9eFz3mK1CM7VbsKtepYGf9yNH',
      copyBtnMessage: 'Copy Address',
      className: ''
    },
    {
      title: 'Pay with Changelly',
      message: 'Click the button above to visit Changelly with the BTC address below.',
      address: '3MAhdmmGm9eFz3mK1CM7VbsKtepYGf9yNH',
      copyBtnMessage: 'Copy Address',
      className: ''
    }
  ];

  const [payment, setPayment] = useState<Deposit>({
    paymentMethod: '',
    amount: 0,
    receipt: null,
  });
  const handleChange = (name: string, value: any) => {
    setPayment({
      ...payment, [name]: value
    });
  }
  function submitPayment() {
    makePayment(payment).then((response) => {
      if (response) {
        router.push("/dashboard/deposits");
      }
    })
  }

  return (
    <main className="w-full h-full flex flex-col items-center justify-start gap-5">
      <section className="w-full h-auto p-2 bg-white rounded-md drop-shadow-md">
        <h1 className="text-xl font-bold text-copy-light">Make payment</h1>
      </section>

      <div className="row justify-content-between w-100 gap-2" style={{ "--bs-gutter-y": "5px" }}>
        {depositMethods.map(method => <PaymentCard className={method.className} key={method.title} method={method} />)}
      </div>

      <section className="p-2 w-full h-auto bg-secondary-light text-white flex flex-col justify-center items-start gap-5 rounded-md drop-shadow-md">
        Contact management at support@icapitalplus.com for other payment
        methods.
      </section>
      <section className="w-full h-auto bg-white rounded-md drop-shadow-md card">
        <div className="card-body">
          <div className="row align-items-stretch">

            <div className="col-6 my-3">
              <label className="form-label">Amount</label>
              <input onChange={(event) => handleChange('amount', event.target.value)} value={payment.amount} type="number" className="form-control" />
            </div>
            <div className="col-6 my-3">
              <label className="form-label">Payment Method</label>
              <Select onChange={(value) => handleChange('paymentMethod', value)} value={payment.paymentMethod} options={paymentMethods} className="border-0 form-control" />
            </div>
            <ImageUpload className="my-3" text='Upload Proof' onImageSelected={(image: File) => handleChange('proof', image)} imageProps={{ width: '100%' }} />

          </div>
          <button className="btn btn-primary mt-2" onClick={submitPayment()}>
            Submit Payment
          </button>
        </div>
      </section>
    </main>
  );
}
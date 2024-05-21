import React from "react";
import styles from './paymentCard.module.css';

export default function PaymentCard({ className, method = { title, message, address } }) {
  return (
    <section className={`${styles.paymentCard} p-0 h-auto bg-white flex flex-col justify-center items-start gap-5 rounded-md drop-shadow-md ${className}`}>
      <div className="w-full h-auto">
        <div className="bg-slate-100 p-4">
          <span className="text-lg font-bold text-copy">{method.title}</span>
        </div>
        <div className="p-4">
          <p className="font-light">
            {method.message}
          </p>
          <p className="text-lg font-semibold pu-2 break-words">
            {method.address}
          </p>
          <p className="font-light">
            After sending it, upload proof of payment below.
          </p>
          <button className="btn btn-sm btn-outline-primary mt-2">
            {method.copyBtnMessage}
          </button>
        </div>
      </div>
    </section>
  );
}
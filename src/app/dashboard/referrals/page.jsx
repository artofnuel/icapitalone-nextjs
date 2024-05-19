"use client";
// import React from "react";

// const page = () => {
//   const transactions = [
//     {
//       client: 1,
//       plan: "Gold",
//       status: "Credit",
//       refLevel: 100,
//       dateCreated: "2024-05-13",
//     },
//     {
//       client: 2,
//       plan: "Silver",
//       status: "Debit",
//       refLevel: 50,
//       dateCreated: "2024-05-12",
//     },
//     {
//       client: 3,
//       plan: "Bronze",
//       status: "Credit",
//       refLevel: 30,
//       dateCreated: "2024-05-11",
//     },
//     // Add more dummy data as needed
//   ];
//   return (
//     <main className="w-full h-full flex flex-col items-center justify-start gap-5">
//       <section className="w-full h-auto p-5 bg-white rounded-md drop-shadow-md">
//         <h1 className="text-xl font-bold text-copy-light">Referrals</h1>
//       </section>

//       <section className="w-full h-auto bg-white p-5 flex flex-col justify-center items-center gap-5 rounded-md drop-shadow-md">
//         <h2 className="text-sm text-light">
//           You can refer users by sharing your referral link:
//         </h2>
//         <p className="text-success font-semibold text-lg">
//           icapitalplus.com/ref/204/?Manny Moe
//         </p>
//       </section>

//       <section className="w-full h-auto bg-white p-5 rounded-md drop-shadow-md">
//         <div className="overflow-x-auto">
//           <table className="w-full border-collapse border border-gray-200">
//             <thead>
//               <tr className="bg-gray-100">
//                 <th className="p-2 border border-gray-200">Client Name</th>
//                 <th className="p-2 border border-gray-200">Client Inv. Plan</th>
//                 <th className="p-2 border border-gray-200">Client Status</th>
//                 <th className="p-2 border border-gray-200">Ref Level</th>
//                 <th className="p-2 border border-gray-200">Date Registered</th>
//               </tr>
//             </thead>
//             <tbody>
//               {transactions.map((transaction) => (
//                 <tr key={transaction.client}>
//                   <td className="p-2 border border-gray-200">
//                     {transaction.client}
//                   </td>
//                   <td className="p-2 border border-gray-200">
//                     {transaction.plan}
//                   </td>
//                   <td className="p-2 border border-gray-200">
//                     {transaction.status}
//                   </td>
//                   <td className="p-2 border border-gray-200">
//                     {transaction.refLevel}
//                   </td>
//                   <td className="p-2 border border-gray-200">
//                     {transaction.dateCreated}
//                   </td>
//                 </tr>
//               ))}
//             </tbody>
//           </table>
//         </div>
//       </section>
//     </main>
//   );
// };

// export default page;

import React from 'react';
import { Button, Image, Typography } from 'antd';

const { Title } = Typography;

const HomePage = () => (
  <div className="App">
    <Title>Home Papge</Title>
    <Button type="primary">Click Me !!</Button>
    <Image alt='image' src='https://miro.medium.com/v2/resize:fit:720/format:webp/1*Ie0HNNfv-4GvMxneYSYz4w.png'></Image>
  </div>
);

export default HomePage;
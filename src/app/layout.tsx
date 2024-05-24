
"use client";
// import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import "@/assets/bootstrap/css/bootstrap.min.css";
import "@/assets/icons/flaticon/flaticon.css";
import React, { ReactNode, useEffect } from "react";
import { AntdRegistry } from "@ant-design/nextjs-registry";
import { ConfigProvider, theme } from "antd";
import { useRequestStore } from '@/store/requestStore';
import Loader from "@/components/Loader/Loader";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useMainStore } from "@/store";
import { useAccountStore } from "@/store/accountStore";

const config = {
  // Use dark algorithm
  algorithm: theme.darkAlgorithm,
  token: {
    colorPrimary: "#1890ff",
  },
};

// const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({
//   subsets: ["latin"],
//   weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
// });

interface RootLayoutProps {
  children: ReactNode;
}

export default function RootLayout({ children }: RootLayoutProps) {
  const { requests } = useRequestStore();
  const { checkAuth } = useMainStore();
  const { user, fetchProfile } = useAccountStore();

  useEffect(() => {
      if (!user) {
          fetchProfile();
      }
  }, [user, fetchProfile]);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      checkAuth();
    }
  }, [checkAuth]);
  return (
    <html lang="en">
      <body>
        {requests > 0 && <Loader />}
        {/* <body className={poppins.className}> */}
        <AntdRegistry>{children}</AntdRegistry>
        <ToastContainer />
      </body>
    </html>
  );
}


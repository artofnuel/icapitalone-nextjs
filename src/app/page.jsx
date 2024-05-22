"use client";
import React from "react";
import "./styles.css";
import "./uikit.min.css";
import Image from "next/image";
import Header from "@/components/Header/Header";
import Banner from "@/components/Home/Banner";
import Services from "@/components/Home/Services";


import "@/assets/css/63514.964e582c2ef59d17337c.css";
import "@/assets/css/82937.0ab2934b180533369b3a.css";
import "@/assets/css/70490.b1b87fe23ccf5ba7468e.css";
import "@/assets/css/47416.4f5f4717726a678b0810.css";
import "@/assets/css/43630.8e27ed79a2e4aea61638.css";
import "@/assets/css/merged-bootstrap-styles.css";
import "@/assets/css/merged-widget-style.css";
import "@/assets/css/5311.8314b0fef8fe22d0e251.css";
import "@/assets/css/7648.18b84e6734bed9409e26.css";
import "@/assets/css/30956.de1e2a61cac87d771a3d.css";
import "@/assets/css/86854.7875848f4c300b848384.css";
import "@/assets/css/96187.8ef3d02e39af37e8d19e.css";
import "@/assets/css/91939.3ea79d7dc2adb798b744.css";
import "@/assets/css/72456.e28e75165f1449a40136.css";
import "@/assets/css/546.d4ce023e54009adf69b3.css";
import "@/assets/css/7884.57ed1f0e14de0ce7dcbb.css";

import StartForex from "@/components/Home/StartForex";
import Features from "@/components/Home/Features";
import Reviews from "@/components/Home/Reviews";
import Press from "@/components/Home/Press";
import Footer from "@/components/Home/Footer";
import Loader from "@/components/Home/Loader";
import Scripts from "@/components/Home/Scripts";

const Page = () => {
    return (
        <main>
            <Scripts />
            <Loader />
            <Header />
            <main>
                <Banner />
                <Services />
                <StartForex />
                <Features />
                <Reviews />
                <Press />
                <Footer />
            </main >
        </main >
    );
}

export default Page;
'use client';
import React from 'react';
import styles from "./auth.module.css";
import { imageAssets } from "@/app/assets/data";

export default function Layout({ children }) {
    return (
        <div className={`d-flex align-items-center justify-between overflow-hidden h-screen`}>
            <div style={{
                backgroundImage:"url('assets/auth-bg.png')"
            }} className={`auth-bg col-lg-7 col-md-7 d-sm-none d-md-block d-lg-block h-screen ${styles.authBg}`}>
            </div>
            <div className='col-lg-5 col-md-5 col-12 h-screen overflow-scroll'>
                {children}
            </div>
        </div>
    )
}
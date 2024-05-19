import React from 'react'
import { FiList, FiLogOut } from "react-icons/fi";
import { LuUser } from "react-icons/lu";
import { CiMail } from "react-icons/ci";
import { RiLineChartLine } from "react-icons/ri";
import { IoWalletOutline } from "react-icons/io5";
import { BiMoneyWithdraw } from "react-icons/bi";
import { TbAffiliate } from "react-icons/tb";
import { CgHomeAlt } from 'react-icons/cg';
import { Menu } from 'antd';
import Link from 'next/link';
import styles from './sidebarLinks.module.css'
import { usePathname } from 'next/navigation';

export default function SideBarLinks({ sidebarCollapsed }) {
    const pathname = usePathname();
    const links = [
        {
            path: "/dashboard",
            icon: <CgHomeAlt size={25} className="p-1 bg-white/10 rounded-full" />,
            label: 'Dashboard'
        },
        {
            path: "/dashboard/account",
            icon: <LuUser size={25} className="p-1 bg-white/10 rounded-full" />,
            label: 'Account'
        },
        {
            path: "/dashboard/support",
            icon: <CiMail size={25} className="p-1 bg-white/10 rounded-full" />,
            label: 'Support'
        },
        {
            path: "/dashboard/transactions",
            icon: <RiLineChartLine size={25} className="p-1 bg-white/10 rounded-full" />,
            label: 'Transactions'
        },
        {
            path: "/dashboard/deposits",
            icon: <IoWalletOutline size={25} className="p-1 bg-white/10 rounded-full" />,
            label: 'Deposits'
        },
        {
            path: "/dashboard/withdrawal",
            icon: <BiMoneyWithdraw size={25} className="p-1 bg-white/10 rounded-full" />,
            label: 'Withdrawal'
        },
        {
            path: "/dashboard/plans",
            icon: <FiList size={25} className="p-1 bg-white/10 rounded-full" />,
            label: 'Plans'
        },
        {
            path: "/dashboard/referrals",
            icon: <TbAffiliate size={25} className="p-1 bg-white/10 rounded-full" />,
            label: 'Refer'
        },
        {
            path: "/auth/login",
            icon: <FiLogOut size={25} className="p-1 bg-white/10 rounded-full" />,
            label: 'Logout'
        }
    ];
    return (
        <Menu theme="dark" mode="inline">
            {links.map(link => (
                <SidebarLink key={link.label} link={{ ...link, isActive: pathname == link.path }} />
            ))}
        </Menu>
    )

    function SidebarLink({ link = { label, path, icon, isActive } }) {
        return <Link
            className={`${styles.sidebarLink} ${link.isActive && styles.active} ${sidebarCollapsed && styles.collapsed} w-full flex gap-3 p-4 hover:bg-copy-light/20`}
            href={link.path ?? '/'}
        >
            {link.icon}
            {!sidebarCollapsed && (<p className="hidden md:block">{link.label}</p>)}
        </Link>;
    }
}

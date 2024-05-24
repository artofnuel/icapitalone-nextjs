'use client';
import SideBarLinks from '@/components/sidebarLinks/sidebarLinks';
import Avatar from '@/components/Avatar/Avatar';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UploadOutlined,
  UserOutlined,
  VideoCameraOutlined,
} from '@ant-design/icons';
import { Layout as AntLayout, Menu } from 'antd';
import Link from 'next/link';
import React, { useState } from 'react';
import { FiList, FiLogOut } from "react-icons/fi";
import withAuth from '@/middleware/withAuth';

const { Header, Sider, Content } = AntLayout;

const Layout = ({ children }: { children: any; }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <AntLayout className="layout">
      <Sider trigger={null} collapsible collapsed={collapsed} className="sidebar">
        <div className="logo p-2 mb-2">
          {collapsed ? 'ICO' : 'iCapitalOne'}
        </div>
        <div className="my-4 d-flex gap-2 flex-column justify-content-center align-items-center">
          <Avatar alt="John" src="https://" size={collapsed ? 100 : 160} />
          {!collapsed &&
            (
              <>
                <p className="text-light fw-bold">John D.</p>
                <div className="d-flex gap-3 justify-content-center align-items-center">
                  <FiLogOut size={15} className="text-light" />
                  <i className="flaticon flaticon-setting text-light"></i>
                </div>
              </>
            )
          }
        </div>
        <hr className="w-100"></hr>
        <SideBarLinks sidebarCollapsed={collapsed} />
      </Sider>
      <AntLayout className="site-layout">
        <Header
          className="site-layout-background d-flex"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
          <div className="w-100 d-flex justify-content-end p-2">
            <Avatar size={90} alt="John" src="https://" className="border-0 bg-dark" />
          </div>
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            paddingBottom: '50px'
          }}
        >
          {children}
          <div className="my-5"></div>
        </Content>
      </AntLayout>
    </AntLayout >
  )
}
export default withAuth(Layout);
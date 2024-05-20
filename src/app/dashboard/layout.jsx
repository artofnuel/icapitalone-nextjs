'use client';
import SideBarLinks from '@/components/sidebarLinks/sidebarLinks';
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

const { Header, Sider, Content } = AntLayout;

const Layout = ({ children }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <AntLayout className="layout">
      <Sider trigger={null} collapsible collapsed={collapsed} className="sidebar">
        <div className="logo">
          <h2>iCapitalOne</h2>
        </div>
        <SideBarLinks sidebarCollapsed={collapsed} />
      </Sider>
      <AntLayout className="site-layout">
        <Header
          className="site-layout-background"
          style={{
            padding: 0,
          }}
        >
          {React.createElement(collapsed ? MenuUnfoldOutlined : MenuFoldOutlined, {
            className: 'trigger',
            onClick: () => setCollapsed(!collapsed),
          })}
        </Header>
        <Content
          style={{
            margin: '24px 16px',
            padding: 24,
            marginBottom:'50px'
          }}
        >
        {children}
      </Content>
    </AntLayout>
    </AntLayout >
  )
}
export default Layout;
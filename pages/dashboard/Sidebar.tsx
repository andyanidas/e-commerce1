import React from 'react';
import {DashboardOutlined, HomeOutlined, TeamOutlined,} from '@ant-design/icons';
import {Layout, Menu} from "antd";
import Link from 'next/link'


const Sidebar = () => {
  const {Sider} = Layout;
  return (
    <Sider>
      <Sider>
        <Menu>
          <Menu.Item key='/dashboard'>
            <HomeOutlined/>
            <Link href="/dashboard"><span>Dashboard</span></Link>
          </Menu.Item>

          <Menu.Item key="/product">
            <DashboardOutlined/>
            <Link href="/dashboard/product"><span>Product</span></Link>
          </Menu.Item>
          <Menu.Item key="/product-type">
            <DashboardOutlined/>
            <Link href="/dashboard/product-type"><span>Product Types</span></Link>
          </Menu.Item>
          <Menu.Item key="/history">
            <DashboardOutlined/>
            <Link href="/dashboard/history"><span>History</span></Link>
          </Menu.Item>
          <Menu.Item key="/users">
            <TeamOutlined/>
            <Link href="/dashboard/users"><span>User</span></Link>
          </Menu.Item>
        </Menu>
      </Sider>
    </Sider>
  );
};

export default Sidebar;
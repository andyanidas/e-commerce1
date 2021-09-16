import React from 'react';
import {
  HomeOutlined,
  DashboardOutlined,
  TeamOutlined,
} from '@ant-design/icons';
import {Layout, Menu} from "antd";
import { useRouter } from 'next/router'
import Link from 'next/link'


const Sidebar = () => {
  const {Sider} = Layout;
  const location = useRouter();
  return (
    <Sider>
        <Sider style={{color:'whitesmoke'}}>
          <Menu theme="light"
                mode="inline"
                defaultSelectedKeys={[location.pathname]}>
            <Menu.Item key='/dashboard'>
              <HomeOutlined />
              <Link href="/dashboard"><span>Dashboard</span></Link>
            </Menu.Item>
            <Menu.Item key="/users">
              <TeamOutlined />
              <Link href="/dashboard/users"><span>User</span></Link>
            </Menu.Item>
            <Menu.Item key = "/history">
              <DashboardOutlined />
              <Link href="/dashboard/history"><span>History</span></Link>
            </Menu.Item>
          </Menu>
        </Sider>
    </Sider>
  );
};

export default Sidebar;
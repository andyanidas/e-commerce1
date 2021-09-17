import React from 'react';
import {Avatar, Layout} from "antd";
import Sidebar from "../Sidebar";
import 'antd/dist/antd.css';
import { UserOutlined } from '@ant-design/icons';

const AppLayout = ({children}:any) => {
  const {Header,Content,Footer} = Layout
  return (
    <Layout>
      <Header style={{color: 'white', background: 'blueviolet'}}>
        <title style={{textAlign: 'left', color: "white"}}>Dashboard</title>
        <Avatar icon={<UserOutlined />} style={{float:"right"}} />
      </Header>
      <Layout>
        <Sidebar/>
        <Content>{children}</Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default AppLayout;
import React from 'react';
import {Avatar, Layout} from "antd";
import Sidebar from "../Sidebar";

const AppLayout = ({children}:any) => {
  const {Header,Content,Footer} = Layout
  return (
    <Layout>
      <Header style={{color: 'white', background: 'blueviolet'}}>
        <title style={{textAlign: 'left', color: "white"}}>Dashboard</title>
        <Avatar src='../public/avatar.svg' style={{float: "right"}}/>
      </Header>
      <Layout>
        <Sidebar/>
        <Content>{children}

        </Content>
      </Layout>
      <Footer>Footer</Footer>
    </Layout>
  );
};

export default AppLayout;
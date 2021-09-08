import type { NextPage } from 'next'
import Head from 'next/head'
import React, {useState} from "react";
import {Modal, Button, Menu, Breadcrumb, Layout} from 'antd';
import 'antd/dist/antd.css'; // or 'antd/dist/antd.less'

const Home: NextPage = () => {
    const [visible,setVisible] = useState(false);
    const showModal= ()=>{
        setVisible(true);
    }
    const handleOk= ()=>{
        setVisible(false);
    }
    const handleCancel= ()=>{
        setVisible(false);
    }
    const { Header, Content, Footer } = Layout;
  return (
    <div>
        <Layout>
            <Header style={{ position: 'fixed', zIndex: 1, width: '100%' }}>
                <div className="logo" />
                <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
                    <Menu.Item key="1">{<>
                        <Button type="primary" onClick={showModal}>HOME PAGE</Button>
                        <Modal title="Basic Modal" visible={visible} onOk={handleOk} onCancel={handleCancel}>Home</Modal>
                    </>
                    }</Menu.Item>
                    <Menu.Item key="2">{<>
                        <Button type="primary" onClick={showModal}>ABOUT COMPANY</Button>
                        <Modal title=" Basic Modal" visible={visible} onOk={handleOk} onCancel={handleCancel}>Home</Modal>
                    </>
                    }</Menu.Item>
                    <Menu.Item key="3">{<>
                        <Button type="primary" onClick={showModal}>CONTACT US</Button>
                        <Modal title=" Basic Modal" visible={visible} onOk={handleOk} onCancel={handleCancel}>Home</Modal>
                    </>
                    }</Menu.Item>
                </Menu>
            </Header>

            <Footer style={{ textAlign: 'center' }}>Ant Design ©2018 Created by Ant UED</Footer>
        </Layout>

      <main>
        <Button type="primary" onClick={showModal}>Button</Button>
          <Modal title="Basic Modal" visible={visible} onOk={handleOk} onCancel={handleCancel}>
              <p>Some contents...</p>
              <p>Some contents...</p>
              <p>Some contents...</p>
          </Modal>
      </main>

    </div>
  )
}

export default Home

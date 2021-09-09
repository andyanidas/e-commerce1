import {Layout, Menu, Modal} from 'antd'
import Link from 'next/link'

import Temp from "../temp";
import ContactUs from "../contactUs/ContactUs";
import React, {useState} from "react";
import Login from "../login/Login";
import Register from "../login/Register";

const Head = () => {
  const {Header} = Layout
  const [visible, setVisible] = useState({
    visible: false,
    title:"",
    onOk:()=>handleOk(),
    onCancel:()=>handleCancel(),
    cancelButtonProps:{hidden:true},
    okButtonProps:{hidden:true}
  });
  const [modal,setModal] = useState("");

  const showModal = (prop:any) => {
    switch (prop.title){
      case "about":
        setVisible({
          ...visible,
          visible: true,
          title: "About Us",
        });
        break
      case "contact":
        setVisible({
          ...visible,
          visible: true,
          title: "Contact Us",
        });
        break
      case "login":
        setVisible({
          ...visible,
          visible: true,
          title: "Login",
        });
        break
      case "register":
        setVisible({
          ...visible,
          visible: true,
          title: "Register",
        });
        break
      case "basket":
        setVisible({
          ...visible,
          visible: true,
          title: "Your Card",
        });
      default:
        break
    }
    setModal(prop.title)
  }
  const handleOk = () => {
    setVisible({...visible,visible: false});
  }

  const handleCancel = () => {
    setVisible({...visible,visible: false});
  }

  return (
    <div>
      <Header style={{position: 'relative', zIndex: 0, width: '100%', background: 'unset'}}>
        <Menu theme="light" mode="horizontal" defaultSelectedKeys={['2']}>
          <Menu.Item key="1">{<>
            <Link href="/">
              <a title="Home Page">Home</a>
            </Link></>}
          </Menu.Item>
          <Menu.Item key="2">{<>
            <a type="ghost" onClick={()=>showModal({title:"about"})} title={"About Us"}>About US</a>
            {modal=="about" && <Modal {...visible} cancelButtonProps={{hidden:true}}>{<Temp/>}</Modal>}
          </>
          }</Menu.Item>
          <Menu.Item key="3">{<>
            <a type="ghost" onClick={()=>showModal({title:"contact"})} title={"Contact Us"}>Contact Us</a>
            {modal=="contact" && <Modal {...visible}>{<ContactUs/>}</Modal>}
          </>
          }</Menu.Item>
          <Menu.Item key="logo">
            <img src="logo.svg"/>
          </Menu.Item>
          <Menu.Item key="4">
            <a type="ghost" onClick={()=>showModal({title:"login"})} title={"Register or Login"}>Register or Login</a>
            {modal=="login" && <Modal {...visible}>{<Login/>}</Modal>}
            {modal=="register" && <Modal {...visible}>{<Register/>}</Modal>}
          </Menu.Item>
          <Menu.Item key="5">
            <a type="ghost" onClick={()=>showModal({title:"basket"})} title={"Basket"}>Basket</a>
            {modal=="checkOut" && <Modal {...visible}>{"Check Out"}</Modal>}
          </Menu.Item>
        </Menu>
      </Header>
    </div>
  );
};

export default Head;
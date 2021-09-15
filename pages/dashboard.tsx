// import {Avatar, Layout, Menu} from "antd";
// import 'antd/dist/antd.css';
// // import Title from "antd/es/typography/Title";
// import {SubMenu} from "rc-menu";
// const {Content, Footer, Header, Sider} = Layout;
// import TheLayout from '../dashboard/containers/TheLayout'

import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import {
  CCreateElement,
  CSidebar,
  CSidebarBrand,
  CSidebarNav,
  CSidebarNavDivider,
  CSidebarNavTitle,
  CSidebarMinimizer,
  CSidebarNavDropdown,
  CSidebarNavItem,
} from '@coreui/react'

import CIcon from '@coreui/icons-react'

const Dashboard = () => {
  const dispatch = useDispatch()
  const show = useSelector(state => state.sidebarShow)

  return <div>
    <CSidebar
      show={show}
      onShowChange={(val:any) => dispatch({type: 'set', sidebarShow: val })}
    >
      <CSidebarBrand className="d-md-down-none" to="/">
        <CIcon
          className="c-sidebar-brand-full"
          name="logo-negative"
          height={35}
        />
        <CIcon
          className="c-sidebar-brand-minimized"
          name="sygnet"
          height={35}
        />
      </CSidebarBrand>
      <CSidebarNav>

        <CCreateElement
          items={navigation}
          components={{
            CSidebarNavDivider,
            CSidebarNavDropdown,
            CSidebarNavItem,
            CSidebarNavTitle
          }}
        />
      </CSidebarNav>
      <CSidebarMinimizer className="c-d-md-down-none"/>
    </CSidebar>
  </div>
  // return (
  //   <div>
  //
  //     {/*<Layout>*/}
  //     {/*  <Header style={{color:'white', background:'blueviolet'}}>*/}
  //     {/*    <title style={{textAlign:'left'}}>Dashboard</title>*/}
  //     {/*    <Avatar src='../public/avatar.svg' style={{float : "right"}}/>*/}
  //     {/*  </Header>*/}
  //     {/*</Layout>*/}
  //     {/*<Layout>*/}
  //     {/*  <Sider style={{color:'whitesmoke'}}>*/}
  //     {/*    <Menu>*/}
  //     {/*      <Menu.Item key='dashboard'>Dash Board</Menu.Item>*/}
  //     {/*      <Menu.Item>*/}
  //     {/*          <SubMenu key={'firstSubMenu'} title='first subMenu Title'>*/}
  //     {/*            <Menu.ItemGroup title='First Item Group'>*/}
  //     {/*              <Menu.Item key="Location1">Location 1</Menu.Item>*/}
  //     {/*              <Menu.Item key="Location2">Location 2</Menu.Item>*/}
  //     {/*            </Menu.ItemGroup>*/}
  //     {/*          </SubMenu>*/}
  //
  //     {/*      </Menu.Item>*/}
  //     {/*      <Menu.Item>*/}
  //     {/*        <SubMenu title='Second subMenu Title'>*/}
  //     {/*          <Menu.ItemGroup title='First Item Group'>*/}
  //     {/*            <Menu.Item key="Location3">Location 3</Menu.Item>*/}
  //     {/*            <Menu.Item key="Location4">Location 4</Menu.Item>*/}
  //     {/*          </Menu.ItemGroup>*/}
  //     {/*        </SubMenu>*/}
  //     {/*      </Menu.Item>*/}
  //     {/*    </Menu>*/}
  //     {/*  </Sider>*/}
  //     {/*  <Content>Content</Content>*/}
  //     {/*  <Footer>Footer</Footer>*/}
  //     {/*</Layout>*/}
  //   </div>
  // );
};

export default Dashboard;
import React from 'react';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import Head from './mainPage/Head'
import Body from './mainPage/Body'
import Foot from "./mainPage/Foot";

const Layouts = () => {
  return (
    <div>
      <Layout><Head/></Layout>
      <Layout>
        <Body/>
        <Foot/>
      </Layout>
    </div>

  )

}
export default Layouts
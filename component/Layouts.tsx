import React from 'react';
import 'antd/dist/antd.css';
import {Layout} from 'antd';
import Head from './mainPage/Head'
import Body from './mainPage/Body'
import Foot from "./mainPage/Foot";
// import { useAuthState } from "react-firebase-hooks/auth";
// import firebase from '../Firebase'
// import {AuthUserProvider} from "../context/AuthContext";
const Layouts = () => {
  // const [user, loading, error] = useAuthState(firebase.auth());
  return (
      <Layout>
        <Head/>
        <Body/>
        <Foot/>
      </Layout>
  )

}
export default Layouts
import type {NextPage} from 'next'
import React from "react";
import 'antd/dist/antd.css';
import Layouts from '../component/Layouts';
// import {AuthUserProvider} from "../context/AuthContext";

const Home: NextPage = () => {
  return (
    // <AuthUserProvider>
      <Layouts/>
    // </AuthUserProvider>
  )
}

export default Home

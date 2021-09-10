import type {NextPage} from 'next'
import React, {useState} from "react";
import 'antd/dist/antd.css';
import Layouts from '../component/Layouts';
import {AuthProvider} from "../context/AuthContext";

const Home: NextPage = () => {
  return (
    <AuthProvider>
      <Layouts/>
    </AuthProvider>
  )
}

export default Home

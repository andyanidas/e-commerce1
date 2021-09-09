import type {NextPage} from 'next'
import React, {useState} from "react";
import 'antd/dist/antd.css';
import Layouts from '../component/Layouts';

const Home: NextPage = () => {
  const [visible, setVisible] = useState(false);

  return (
    <div>
      <Layouts/>
    </div>
  )
}

export default Home

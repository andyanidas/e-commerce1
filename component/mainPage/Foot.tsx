import React from 'react';
import {Layout} from "antd";

const Foot = () => {
  const {Footer} = Layout
  return (
    <div>
      <Footer style={{
        textAlign: 'center',
        position: 'absolute',
        bottom: 0,
        width: '100%',
        height: '2.5rem',
        zIndex: 0
      }}>Copyright 2021. All rights reserved | GrassLand Mongolia LLC <img src={"paymentLogos.svg"}/></Footer>
    </div>
  );
};

export default Foot;
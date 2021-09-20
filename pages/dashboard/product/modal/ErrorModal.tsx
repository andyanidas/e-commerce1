import React, {useState} from 'react';
import {Alert} from "antd";

const ErrorModal = (props:any) => {
  const [error, setError] = useState("Something went wrong!");
  switch(props.error){
    case "auth/email-already-in-use":
      setError("Email is already used!")
      break
    case "":
      setError("invalid email!")
  }
  return (
    <Alert message={error} type="warning"/>
  );
};

export default ErrorModal;
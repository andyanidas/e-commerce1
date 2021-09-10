import { Form, Input, Button, Checkbox } from 'antd';
import {useAuth} from "../../context/AuthContext";
import {useState} from "react";
import {useModalUpdate} from '../../context/AppContext'
import Register from "./Register";


const Login = (props:any) => {
  const [isRegister, setIsRegister] = useState(false);
  // const {signup} = useAuth()
  const onFinish = (values: any) => {
    props.success()
    console.log('Success:', values);
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{ span: 8 }}
      wrapperCol={{ span: 16 }}
      initialValues={{ remember: true }}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{ required: true, message: 'Please input your username!' }]}
      >
        <Input />
      </Form.Item>

      <Form.Item
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password />
      </Form.Item>

      <Form.Item name="remember" valuePropName="checked" wrapperCol={{ offset: 8, span: 16 }}>
        <a onClick={()=>props.modalSwitch("resetPass")}>Forgot Password</a>
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="ghost" htmlType="submit">
          Login
        </Button>
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="default" onClick={()=>props.modalSwitch("register")}>
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Login;
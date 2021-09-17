import {Button, Form, Input} from 'antd';
import {doc,setDoc } from "firebase/firestore";
import { getAuth, createUserWithEmailAndPassword } from "firebase/auth";
import {db} from '../../context/AuthContext'

interface user{
  username: string
  password: string
  email:string
}

const Register = (props: any) => {
  const onFinish = async (values: user) => {
    // console.log("database: ", dataBase)
    await createUserWithEmailAndPassword(getAuth() ,values.email, values.password)
    await setDoc(doc(db,"users",values.username),{
      email: values.email,
      username: values.username,
      password: values.password,
      role: "user"
    });
    window.location.href = '/';
    props.success()
  };


  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <Form
      name="basic"
      labelCol={{span: 8}}
      wrapperCol={{span: 16}}
      initialValues={{remember: true}}
      onFinish={onFinish}
      onFinishFailed={onFinishFailed}
      autoComplete="off"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{required: true, message: 'Please input your username!'}]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="E-mail"
        name="email"
        rules={[{required: true, message: 'Please input your email!'}]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{required: true, message: 'Please input your password!'}]}
      >
        <Input.Password/>
      </Form.Item>
      <Form.Item
        label="Password Confirmation"
        name="passwordConfirm"
        rules={[{required: true, message: 'Please confirm your password!'}, ({getFieldValue}) => ({
          validator(_rule, value) {
            if (!value || getFieldValue('password') === value) {
              return Promise.resolve();
            }
            return Promise.reject('The two passwords that you entered do not match!');
          },
        }),]}
      >
        <Input.Password/>
      </Form.Item>
      <Form.Item name="remember" valuePropName="checked" wrapperCol={{offset: 8, span: 16}}>
        <a onClick={() => props.modalSwitch("login")}>I have an account</a>
      </Form.Item>

      <Form.Item wrapperCol={{offset: 8, span: 16}}>
        <Button type="ghost" htmlType="submit">
          Register
        </Button>
      </Form.Item>
    </Form>
  );
};

export default Register;
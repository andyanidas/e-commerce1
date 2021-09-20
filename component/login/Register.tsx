import {Alert, Button, Form, Input, Select} from 'antd';
import {userService} from "../../services/userService";
import {User} from "../../pages/dashboard/util/models";
import {ReactElement, useState} from "react";



const Register = (props: any) => {
  const [error, setError] = useState<ReactElement>()
  const {Option} = Select;
  const onFinish = async (values: User) => {
    await userService.registerUser(values).then((v)=>{
      console.log(v)
      // window.location.href = '/';

      // props.success()
    }).catch((e)=>{ //NOT FINISHED
      switch (e) {
        case "auth/email-already-in-use":
          setError(<Alert message="Error Text" type="error" />)
          console.log(error)
          break
      }
    });

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
        label="Gender"
        name="gender"
        required={true}>
        <Select>
          <Option value="male">MALE</Option>
          <Option value="female">FEMALE</Option>
        </Select>
      </Form.Item>
      <Form.Item
        label="Password"
        name="password"
        rules={[{required: true, message: 'Password length must be more than 8 characters', min:8, max:16}]}
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
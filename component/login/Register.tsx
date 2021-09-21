import { Button, Form, Input, Select} from 'antd';
import {userService} from "../../services/userService";
import {User} from "../util/models";
import { useState} from "react";



const Register = (props: any) => {
  // const [error, setError] = useState<ReactElement>()
  const [errorMsg, setErrorMsg] = useState<string>("")
  const [validating, setValidating] = useState<any>("")
  const [showError, setShowError] = useState<boolean>(false)
  const {Option} = Select;
  const onFinish = async (values: User) => {
    setValidating("validating")
    await userService.registerUser(values).then(()=>{
      setValidating("")
      console.log("inside then and the error is : ", errorMsg)
      // window.location.href = '/';
      console.log(validating)
      // props.success()
    }).catch((e)=>{ //NOT FINISHED

      switch (e.code) {
        case "auth/email-already-in-use":
          setErrorMsg("Email is already in use")
          console.log(errorMsg)
          break
        case "auth/invalid-email":
          setErrorMsg("Invalid Email!")
      }
      console.log("inside then and the error is : ", e)
      setShowError(true)
      setValidating("error")
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
      size = "small"
    >
      <Form.Item
        label="Username"
        name="username"
        rules={[{
          required: true,
          message: 'Please input a valid username!',
          pattern: new RegExp("^(?=[a-zA-Z0-9._]{4,20}$)(?!.*[_.]{2})[^_.].*[^_.]$")
        }]}
      >
        <Input/>
      </Form.Item>
      <Form.Item
        label="E-mail"
        name="email"
        required={true}
        // validateStatus={validating}
        help={showError ? errorMsg:""}
        validateStatus={showError? "error": ""}
        // required={true}
        // rules={[{required: true, message: 'Please input your email!'}]}

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
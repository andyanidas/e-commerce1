import {Form, Input, Button, Modal} from 'antd';


const ResetPassword = (props:any) => {
  const onFinish = (values: any) => {
      let secondsToGo = 5;
      const modal = Modal.success({
        title: 'Successful Message',
        content: `Please check your email to change your password`,
      });
      const timer = setInterval(() => {
        secondsToGo -= 1;
      }, 1000);
      setTimeout(() => {
        clearInterval(timer);
        modal.destroy();
      }, secondsToGo * 1000);

    props.success()
    console.log('Success:', values);
    return
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
        label="Email"
        name="email"
        rules={[{ required: true, message: 'Please input your Email!',type: "email" }]}
      >
        <Input />
      </Form.Item>

      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        <Button type="default" htmlType="submit">
          Send Link
        </Button>
      </Form.Item>
    </Form>
  );
};

export default ResetPassword;
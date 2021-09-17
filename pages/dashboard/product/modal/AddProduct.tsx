import {Button, Form, Input, InputNumber, Select} from "antd";
import {product} from "../index";
const AddProduct = (props:any) => {
  const onFinish=(values:product)=>{
    props.finish(values)
  }
  return (
    <div>
      <>
        <Form
          labelCol={{ span: 4 }}
          wrapperCol={{ span: 14 }}
          layout="horizontal"
          onFinish={onFinish}
          initialValues={{ size: "small" }}
        >
          <Form.Item label="Name" name='name'>
            <Input type="name" required={true}/>
          </Form.Item>
          <Form.Item label="Product Type" name="typeId" required={true}>
            <Select>
              <Select.Option value="demo">Demo</Select.Option>
              <Select.Option value="demo1">Demo1</Select.Option>
              <Select.Option value="demo2">Demo2</Select.Option>
              <Select.Option value="demo3">Demo3</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item
            label="Measurement Type"
            name="measurementType"
            wrapperCol={{ span: 16 }}
            required={true}>
            <Select>
              <Select.Option value="kg">Demo</Select.Option>
              <Select.Option value="demo1">Demo1</Select.Option>
              <Select.Option value="demo2">Demo2</Select.Option>
              <Select.Option value="demo3">Demo3</Select.Option>
            </Select>
          </Form.Item>
          <Form.Item label="Price" name='price'>
            <InputNumber
              required={true}
              defaultValue={undefined}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}/>
          </Form.Item>
          <Form.Item label="Promoted Price" name='promotedPrice'>
            <InputNumber
              required={true}
              defaultValue={undefined}
              formatter={value => `$ ${value}`.replace(/\B(?=(\d{3})+(?!\d))/g, ',')}/>
          </Form.Item>
          <Form.Item name='description' label="Description">
            <Input.TextArea required={true} minLength={20}/>
          </Form.Item>
          <Form.Item label="Button">{
          }
            <Button htmlType="submit">Button</Button>
          </Form.Item>
        </Form>
      </>
    </div>
  );
};

export default AddProduct;
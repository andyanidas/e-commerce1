import {Button, Form, Input, InputNumber, Select} from "antd";
import {Product} from "../../../../component/util/models";
import {measurementTypes, productTypes} from "../../../../component/util/types"

const AddProduct = (props: any) => {
  const onFinish = (values: Product) => {
    props.finish(values)
  }
  return (
    <Form
      labelCol={{span: 4}}
      wrapperCol={{span: 14}}
      layout="horizontal"
      onFinish={onFinish}
      initialValues={{size: "small"}}
    >
      <Form.Item label="Name" name='name'>
        <Input type="name" required={true}/>
      </Form.Item>
      <Form.Item label="Product Type" name="typeId" required={true}>
        <Select>
          {productTypes.map((type) => <Select.Option value={type}>{type}</Select.Option>)}
        </Select>
      </Form.Item>
      <Form.Item
        label="Measurement Type"
        name="measurementType"
        wrapperCol={{span: 16}}
        required={true}>
        <Select>
          {measurementTypes.map((type) => <Select.Option value={type}>{type}</Select.Option>)}
        </Select>
      </Form.Item>
      <Form.Item label="Quantity" name='quantity'>
        <InputNumber defaultValue={0}/>
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
        <Button htmlType="submit">Add</Button>
      </Form.Item>
    </Form>
  );
};

export default AddProduct;
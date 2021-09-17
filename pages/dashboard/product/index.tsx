import AppLayout from "../component/AppLayout";
import AddProduct from "./modal/AddProduct";
import {useState} from "react";
import {Button, Modal} from "antd";
import {collection, addDoc} from "firebase/firestore";
import {db} from "../../../context/AuthContext";
import moment from "moment";

export interface product{
  name:string,            //input
  description:string,     //input
  measurementType:string, //select
  price:number,           //input number
  promotedPrice:number,   //input number
  typeId: string,         //select
//  productId:string,       //generated
//  productCode: string,    //generated
//  mainPictureName:string  //select
}



const Index = () => {
  const [isAddProductVisible, setIsAddProductVisible] = useState(false);

  const showModal = () => {
    setIsAddProductVisible(true);
  };

  const handleOk = () => {
    setIsAddProductVisible(false);
  };

  const handleCancel = () => {
    setIsAddProductVisible(false);
  };
  const finishAdding = async (values:product) =>{
    setIsAddProductVisible(false);
    await addDoc(collection(db, ('product')), {
      name: values.name,
      description:values.description,
      measurementType:values.measurementType,
      price:values.price,
      promotedPrice:values.promotedPrice,
      typeId: values.typeId,
      productCode: values.typeId.substring(0,2) + moment().format('MDhmmss'),       //generated
    });
  }

  return (
    <AppLayout>
      <Button type="primary" onClick={showModal}>
        Add Product
      </Button>
      <Modal
        title="Add Product"
        visible={isAddProductVisible}
        onOk={handleOk}
        onCancel={handleCancel}
        cancelButtonProps={{hidden: true}}
        okButtonProps={{hidden:true}}
      >
        <AddProduct finish={finishAdding}/>
      </Modal>
    </AppLayout>
  );
};

export default Index;
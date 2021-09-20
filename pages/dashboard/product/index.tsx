import AppLayout from "../component/AppLayout";
import AddProduct from "./modal/AddProduct";
import {useEffect, useState} from "react";
import {Button, Modal,List, Avatar} from "antd";
import {collection,doc, setDoc } from "firebase/firestore";
import {db} from "../../../context/AuthContext";
// import moment from "moment";
import {Product} from "../util/models";
import {productService} from "../../../services/productService"




const Index = () => {
  const [isAddProductVisible, setIsAddProductVisible] = useState(false);
  const [productList, setProductList] = useState<Product[]>()
  const citiesRef = collection(db, "shops");

  const addSamples:any =()=>{
     setDoc(doc(citiesRef, "secondShop"), {
       name: "Second Shop", id: 2, code: "UB0002",
       logo: "", type: "хот дотор",
       address: {
         district:"chingiltei",
         horoo:1,
         building:"10A",
         longitude:"106.921088",
         latitude:"47.920807",
         phone: "99889988",
         responsibleStaff:"Erdene",
         email:"asdasd@Asd.com"
       }
     });

/*
{
      name: "First Shop", id: 1, code: "UB0001",
      logo: "", type: "хот дотор",
      address: {
        district:"chingiltei",
        horoo:1,
        building:"10A",
        longitude:"106.921088",
        latitude:"47.920807",
        phone: "99889988",
        responsibleStaff:"Erdene",
        email:"asdasd@Asd.com"
      }}
* */
  }

  const showModal = () => {
    setIsAddProductVisible(true);
  };

  const handleOk = () => {
    setIsAddProductVisible(false);
  };

  const handleCancel = () => {
    setIsAddProductVisible(false);
  };
  const finishAdding = async (values:Product) =>{
    setIsAddProductVisible(false);
    await productService.addProduct(values)
  }


  useEffect(()=>{
    //download all data
    setProductList([])
  },[])

  return (
    <AppLayout>
      <List
        itemLayout="horizontal"
        dataSource={productList}
        renderItem={(item:Product) => (
          <List.Item>
            <List.Item.Meta
              avatar={<Avatar src="https://zos.alipayobjects.com/rmsportal/ODTLcjxAfvqbxHnVXCYX.png" />}
              title={<a href="https://ant.design">{item.name}</a>}
              description="Ant Design, a design language for background applications, is refined by Ant UED Team"
            />
          </List.Item>
        )}
      />,
      <Button type="primary" onClick={showModal}>
        Add Product
      </Button>
      <Button type="primary" onClick={addSamples}>
        Add Samples
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
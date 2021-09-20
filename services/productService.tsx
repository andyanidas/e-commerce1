import moment from "moment";
import {collection, doc, setDoc} from "firebase/firestore";
import {db} from "../context/AuthContext";
import {Product} from "../pages/dashboard/util/models";

function  addProduct(values:Product):Promise<any>{
 const productCode = values.typeId.substring(0,2) + moment().format('MDhmmss');

 return setDoc(doc(collection(db, 'product'),productCode), {
  name: values.name,
  description:values.description,
  measurementType:values.measurementType,
  price:values.price,
  promotedPrice:values.promotedPrice,
  typeId: values.typeId,
  productCode: productCode,       //generated
 });
}
function updateProduct(/*productId:string,*/ updatedProduct:Product):Promise<any>{
 //not finished!
 const productCode = updatedProduct.typeId.substring(0,2) + moment().format('MDhmmss');
 return setDoc(doc(collection(db, 'product'),productCode), {
  name: updatedProduct.name,
  description:updatedProduct.description,
  measurementType:updatedProduct.measurementType,
  price:updatedProduct.price,
  promotedPrice:updatedProduct.promotedPrice,
  typeId: updatedProduct.typeId,
  productCode: productCode,       //generated
 });
}
function getAllProduct(){
 //not finished
}
function getAllProductOfShop(){
 //not finished
}
function getAllProductOfSeries(){
 //not finished
}
function getOneProduct(){
 //not finished
}
function deleteProduct(){
 //not finished
}

export const productService = {
 addProduct,
 updateProduct,
 getAllProduct,
 deleteProduct,
 getAllProductOfShop,
 getAllProductOfSeries,
 getOneProduct
}
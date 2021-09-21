export interface User{
  username:string;
  email:string;
  password:string;
  passwordConfirmation?:string;
  userId?:string;
  type?:string;
  facebookId?:string;
  shopId?:string;
  phone?:string;
  registeredDate?:string;
  role?:string,
  gender?:string
}
export interface Product{
  name:string,            //input
  description:string,     //input
  measurementType?:string, //select
  price:number,           //input number
  promotedPrice?:number,   //input number
  typeId: string,         //select
  productId?:string,       //generated
  productCode?: string,    //generated
  mainPictureName?:string  //select
}
export interface ProductSeries{
  id:string;
  name:string;
  logo?:string;
}
export interface Order{
  id:string;
  shopId:string;
  orderDate:string;
  customerId?:string;
  customerPhone:string;
  totalPrice:number;
  paymentDate:string;
  addressId?:string;
  shipCountry:string;
  shipState:string;
  shipCity:string;
  shipStreet:string;
  shipDetail:string;
  order:OrderedItem;
}
export interface OrderedItem{
  orderNumber:string;
  itemId:string;
  amount:string;
  totalPrice:number;
}
export interface Shop{
  name:string;
  id:string;
  code:string;
  logo?:string;
  type:string;
  address: Address
}
export interface Address{
  id?:string;
  county:string;
  state:string;
  city:string;
  district:string;
  street:string;
  building?:string;
  floor?:number;
  door?:number;
  detail1?:string;
  detail2?:string;
}

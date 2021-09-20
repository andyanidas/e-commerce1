import {collection, doc, setDoc} from "firebase/firestore";
import {db} from "../context/AuthContext";
import {User} from "../pages/dashboard/util/models";
import {createUserWithEmailAndPassword, getAuth} from "firebase/auth";
import moment from "moment";

async function registerUser(newUser: User): Promise<any> {
  return await createUserWithEmailAndPassword(getAuth(), newUser.email, newUser.password).then(async () => {
    return await setDoc(doc(db, "users", newUser.username), {
      email: newUser.email,
      username: newUser.username,
      password: newUser.password,
      role: "user",
      registeredDate: moment().format("YYYY MM DD"),
      gender: newUser.gender,
    });
  })
}
function updateUser(/*productId:string,*/ updateInfo:User):Promise<any>{
  //not finished!
  return setDoc(doc(collection(db, 'product'),typeof updateInfo), {

  });
}
function loginUser(loginInfo:User){
  console.log(loginInfo)
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

export const userService = {
  registerUser,
  updateUser,
  loginUser,
  deleteProduct,
  getAllProductOfShop,
  getAllProductOfSeries,
  getOneProduct
}
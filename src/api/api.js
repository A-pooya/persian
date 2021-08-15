import Axios from "axios";

export const api = () => {
    return Axios.create({
        baseURL:"http://localhost:3000",
    })
} 

export const Privateapi = () => {
    return Axios.create({
        baseURL:"http://localhost:3000",
   headers:{
       "Content-Type":"multipart/form-data",
       "Authorization":`${localStorage.getItem("token")}`
   }
    })
} 

export const PrivateapiText = () => {
    return Axios.create({
        baseURL:"http://localhost:3000",
    //    headers:{
    //        "token":localStorage.getItem("token"),
    //        'Access-Control-Allow-Origin' : '*',
    //        "Access-Control-Allow-Methods" : "GET , POST ,PUT ,DELETE",
    //        "Access-Control-Allow-Headers" : "Content-Type , Authorization ,X-PINGOTHER"
    //    }
    })
} 
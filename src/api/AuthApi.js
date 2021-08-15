
import { api , Privateapi ,PrivateapiText } from "./api";

export const loginApi = (user,callback) => {
    api().post("/login", user).then(
        response => {
            console.log(response);
            const data = response.data;
            console.log(data);
            callback(true , data)
        }
    ).catch((err) => 
    {    console.log(err)
        callback(false , err.response.data.message)}
        )

}

export const registerApi = (newUser , callback ) => {
    api().post("/register" , newUser).then(response => {
        console.log(response);
        const data = response.data;
        console.log(data);
        callback(true , data)
    }).catch(err => {
        console.log(err)
        callback(false , err.response.data.message)
    })
}
export const profileImageApi = (image , callback ) => {
    Privateapi().post("/image" , image  ).then(response => {
        console.log(response);
        const data = response.data;
        console.log(data);
        callback(true , data)
    }).catch(err => {
        console.log(err)
        callback(false , err.response)
    })
}
export const sendNewTwitt = ( data, callback ) => {
    Privateapi().post("/newTwitt" , data).then(response => {
        console.log(response);
        const data = response.data;
        console.log(data);
        callback(true , data)
    }).catch(err => {
        console.log(err)
        callback(false , err.response.message)
    })
}

export const getProfile = ( callback ) => {
    Privateapi().get("/getProfile").then(response => {
        console.log(response);
        const data = response.data;
        console.log(data);
        callback(true , data)
    }).catch(err => {
        console.log(err)
        callback(false , err.response)
    })
}
 
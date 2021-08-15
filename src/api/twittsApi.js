import { api , Privateapi ,PrivateapiText } from "./api";

export const getAllTwitts = ( callback ) => {
    PrivateapiText().get("/twitts").then(response => {
        const data = response.data.twitts;
       // console.log(data);
        callback(true , data)
    }).catch(err => {
        console.log(err)
        callback(false , err.response)
    })
}


export const getAllUsers = ( callback ) => {
    PrivateapiText().get("/users").then(response => {
        const data = response.data.users;
        //console.log(data);
        callback(true , data)
    }).catch(err => {
        console.log(err)
        callback(false , err.response)
    })
}

export const getAllHashtags = ( callback ) => {
    PrivateapiText().get("/hashtags").then(response => {
        const data = response.data.filter;
        console.log(data);
        callback(true , data)
    }).catch(err => {
        console.log(err)
        callback(false , err.response)
    })
}

export const handleLikes = (id , callback ) => {
    PrivateapiText().post("/likes",id).then(response => {
        const data = response.data;
        //console.log(data);
        callback(true , data)
    }).catch(err => {
        console.log(err)
        callback(false , err.response.message)
    })
}

export const postByHashtagRequest = (hashtag , callback ) => {
    PrivateapiText().post("/TweetByHashtags",hashtag).then(response => {
        const data = response.data;
        //console.log(data);
        callback(true , data)
    }).catch(err => {
        console.log(err)
        callback(false , err.response.message)
    })
}

export const postByUserRequest = (username , callback ) => {
    PrivateapiText().post("/TweetByUsers",username).then(response => {
        const data = response.data;
       // console.log(data);
        callback(true , data)
    }).catch(err => {
        console.log(err)
        callback(false , err.response)
    })
}



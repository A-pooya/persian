import { ButtonBase, Input, Menu, MenuItem, Typography } from '@material-ui/core';
import React, { useEffect, useRef, useState } from 'react';
import UseStyles from './leftstyle';
import {Grid} from "@material-ui/core"
import {Divider} from  "@material-ui/core"
import {  Link } from 'react-router-dom';
import { profileImageApi } from '../../../api/AuthApi';
import {toast} from "react-toastify"
import {getAllUsers} from "../../../api/twittsApi"

const BestReporter = ({name,username,img}) => {
 const classes = UseStyles()

  return(
    <Link className = {classes.Link} to = {`/User/${username}` }>
      <ButtonBase className = {classes.UsersBtn} >
      <Grid item container className={classes.MainDiv} >
      <Grid  item className={classes.DivImg2}>
      <img src={img} className={classes.Cimg}/> 
      </Grid>

      <Grid item direction={"column"} className={classes.Cproperty2}>
      <Typography className={classes.Cname}>
        {name}
      </Typography>
      <Typography className={classes.Cid}>
        {username}
        </Typography> 
      </Grid>
      

      </Grid>
      </ButtonBase>
    </Link>
    

  )}

 

const Leftsidebar = () => {

const classes = UseStyles()
const [Anchormenu , SetAnchormenu] = useState();
const [profileImage , setProfileImage] = useState();
const [imagePath , setimagePath] = useState();
const [users , setusers] = useState([])

useEffect(()=>{
getAllUsers((isok , data)=> {
  if(isok) {
     return setusers(data)
     
            
}
  else return toast.error(data)
})
},[])

const Handlemenu = (e) => {
  if(Anchormenu){
    SetAnchormenu(null)
  }
  else{
      SetAnchormenu(e.currentTarget)
  }
}
const HandleLogout = () => {
  localStorage.clear()
  window.location.reload()
}


const imageInput = useRef();

const ChangeProfileImage = (e) => {
 if(e.target.files && e.target.files.length > 0){
    setProfileImage(e.target.files[0])

    const reader = new FileReader()
    reader.onload = (e) => {
      setimagePath(e.target.result)
    }
    reader.readAsDataURL(e.target.files[0])
    
    
    const username = localStorage.getItem("username")
    
    const formdata = new FormData();
    formdata.append("image" , e.target.files[0] );
    formdata.append("username" ,username)
    
    
    
    profileImageApi(formdata, (isok , data) => {
      if(isok){ 
        toast.success(data.message)
        localStorage.setItem("imageaddress",data.imageaddress)
      }

      else return toast.error(data)
    })
 }

}

const HandleProfileImage = () => {
  if(imagePath){
   return imagePath
  }
  if(localStorage.getItem("image") && localStorage.getItem("image")!== "undefined"){
    return localStorage.getItem("image")
  }
  return "/images/userimage.png"
}
//console.log(users);
    return (
        <Grid className= {classes.leftsidebar} direction={"column"} >
          <Grid container className={classes.Ccontainer}>
            <ButtonBase onClick = {Handlemenu}>

            <Grid  item className={classes.DivImg} >
              
             <img src={HandleProfileImage()} className={classes.Cimg} /> 
            </Grid>

            </ButtonBase>
             <Grid item direction={"column"} className={classes.Cproperty}>
             <Typography className={classes.Cname}>
               {localStorage.getItem("name")}
             </Typography>
             <Typography className={classes.Cid}>
               {localStorage.getItem("username")}
              </Typography>  
             </Grid>
             <input ref={imageInput} type = {"file"} style={{display:"none"}} onChange = {ChangeProfileImage}/>
          </Grid>
          <Grid container className={classes.container2}>
            <Typography className={classes.bestreporters}>بهترین خبرنگاران</Typography>
            <Divider className={classes.divider} orientation={"horizontal"} />
            
          {
          users.map((item,index) => {
            if(users !== undefined && users !== "undefined" && users !== null){
              return(
                
          <React.Fragment>
            <BestReporter  name ={item.fullname} username={item.username} img={item.image} />
            {index !== users.length-1 &&
            <Divider className={classes.divider}/> 
            }
          </React.Fragment>      
          
          )}
          else{
            return(
            <div>
               لطفا برای نمایش خبرنگاران صفحه را رفرش کنید
            </div>
            )
          }
        })}

        </Grid>    
        <Menu open={Boolean(Anchormenu)} onClose={() => SetAnchormenu(null)} anchorEl = {Anchormenu} className = {classes.Menu}  >
          <MenuItem className = {classes.MenuItem} onClick ={HandleLogout} >خروج</MenuItem>
          <MenuItem className = {classes.MenuItem} onClick = {() => {imageInput.current.click()}}  > تغییر عکس  پروفایل</MenuItem>
          </Menu>  
      </Grid>
      );
    }
    
    
export default Leftsidebar;
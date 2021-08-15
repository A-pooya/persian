import React, { useState } from 'react';
import {Paper,Tab,Tabs, Typography , Input, Grid, Button} from "@material-ui/core"
import useStyles from "./AuthStyle";
import { loginApi, registerApi } from '../../../api/AuthApi';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LOGIN_PAGE = 1;
const REGISTER_PAGE = 2;

const AuthPage = () => {
const classes = useStyles();


const [tab , settab] = useState(LOGIN_PAGE)

const changetabs = (e , newvalue) => {
settab(newvalue);
}

const [email , setemail] = useState()
const [password , setpassword] = useState()

const validation = (user) => {
if(!user.email){
    return "ایمیل الزامی می‌باشد"
}
if(!user.password){
    return "رمز عبور خود را وارد کنید"
}

}
 
const sendLoginData = () => {
  const user = {
      email,
      password
  };
const error = validation(user)
  if(error){
     return toast.warn(error)
  }
  loginApi(user , (isok , data) => {
    if(isok){
       toast.success(data.message)
       localStorage.setItem("name", data.name);
       localStorage.setItem("username" , data.username);
       localStorage.setItem("token" , data.token);
       localStorage.setItem("id" , data.id);
       window.location.reload();
    }
    else{
      return  toast.error(data)
    }
  })
}

const [fullnameRegister, setfullnameregiter] = useState();
const [usernameregister , setusernameregister] = useState()
const [emailRegister, setemailRegister] = useState();
const [passwordRegister, setpasswordRegister] = useState();
const [confpasswordRegister, setconfpasswordRegister] = useState();

const registervalidation = (newUser , confirmpassword) =>
{
    if(!newUser.fullname){return "لطفا نام و نام‌خانوادگی خود را وارد کنید"}
    if(!newUser.username){return "لطفا نام کاربری خود را وارد کنید"}
    if(!newUser.email){return "لطفاایمیل خود را وارد کنید"}
    if(!newUser.password){return "لطفا رمز عبور خود را وارد کنید"}
    if(!confirmpassword){return "لطفا تکرار کلمه عبور خود را وارد کنید"}
    if(confirmpassword !== newUser.password){
        return "رمز عبور و تکرار رمزعبور یکسان نمی‌باشند"
    }

}

const sendRegisterData = () => {
   const newUser = {
        fullname:fullnameRegister,
        username:usernameregister,
        email:emailRegister,
        password:passwordRegister,
    }
    const validation = registervalidation(newUser , confpasswordRegister)
    if(validation){return toast.warn(validation)}
    registerApi(newUser , (isok , data) => {
        if(isok){
            toast.success(data.message);
            localStorage.setItem("name", data.name);
            localStorage.setItem("username" , data.username);
            localStorage.setItem("token" , data.token);
            localStorage.setItem("id",data.id)
            window.location.reload()

        }
        else{
            return toast.error(data);
        }
    })
}



    return (  
            
        <Paper className={classes.paper} >
                <Typography className={classes.Title}>به توییتر فارسی خوش آمدید</Typography>
            <Grid  item className={classes.Tabs}>

                <Tabs
                value = {tab}
                onChange = {changetabs}
                indicatorColor = "primary"
                textColor = "primary"
                >
                    <Tab label={"ورود"} value= {LOGIN_PAGE} className={classes.LoginTab}   />
                    <Tab label = {"ثبت نام"} value = {REGISTER_PAGE } className={classes.LoginTab}/>
                </Tabs>
            </Grid>
            <Grid  item className = {classes.Inputes}>

             {tab === LOGIN_PAGE &&
             <div>
                <Typography className={classes.inputeTitles}>ایمیل</Typography>
                <Input value = {email} onChange = {e => setemail(e.target.value)} className={classes.inputs}></Input>
                <Typography className={classes.inputeTitles}>رمزعبور</Typography>
                <Input value = {password} onChange = {e => setpassword(e.target.value)} className={classes.inputs}></Input>
                <Button className={classes.Btn} onClick={sendLoginData}>ورود</Button>
             </div>
             }
              {tab === REGISTER_PAGE &&
             <div>
                <Typography className={classes.inputeTitles}>نام و نام‌خانوادگی</Typography>
                <Input type = {"text"} className={classes.inputs} value={fullnameRegister} onChange={e => setfullnameregiter(e.target.value)}></Input>
                <Typography className={classes.inputeTitles}>نام کاربری</Typography>
                <Input type = {"text"} className={classes.inputs} value={usernameregister} onChange={e => setusernameregister(e.target.value)}></Input>
               
                <Typography className={classes.inputeTitles}>ایمیل</Typography>
                <Input  className={classes.inputs} value={emailRegister} onChange={e => setemailRegister(e.target.value)}></Input>
                <Typography className={classes.inputeTitles}>کلمه عبور</Typography>
                <Input type = {"password"} className={classes.inputs} value={passwordRegister} onChange={e => setpasswordRegister(e.target.value) }></Input>
                <Typography className={classes.inputeTitles}>تکرار کلمه عبور</Typography>
                <Input type = {"password"} className={classes.inputs} value={confpasswordRegister} onChange={e =>setconfpasswordRegister(e.target.value) }></Input>
                <Button className={classes.Btn} onClick={sendRegisterData}>ثبت نام</Button>
             </div>
             }
             </Grid>

        </Paper>
    );
}
 
export default AuthPage;

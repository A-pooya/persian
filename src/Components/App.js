import React, { useEffect , useState } from 'react';
import Rightsidebar from "./layouts/rightsidebar/Rightsidebar";
import Leftsidebar from "./layouts/leftsidebar/Leftsidebar"
import UseStyles from './style';
import { CircularProgress, Divider } from '@material-ui/core';
import Navbar from './layouts/navbar/Navbar';
import { getProfile } from '../api/AuthApi';
import {toast} from "react-toastify"
import {useHistory} from "react-router-dom"
import { Typography } from '@material-ui/core';



const App = (props) => {
    const classes = UseStyles();
    const history = useHistory();
    const [wait , setwait] = useState(true)

useEffect(()=>{
    getProfile((isok , data) => {
        if(!isok){
            toast.error(data)
            localStorage.clear()
            return history.push("/login")
        }
        setwait(false)
        localStorage.setItem("name", data.fullname);
        localStorage.setItem("username" , data.username);
        localStorage.setItem("token" , data.token);
        localStorage.setItem("image", data.image);
    })
},[])

if(wait){
    return (
    <div className={classes.loadBox} >
        <CircularProgress className={classes.loading} />
        <Typography>لطفا صبر کنید</Typography>
    </div>
    )}
else
        return ( 
            <div className={classes.columnDiv}>
                <Navbar/>
            <div className = {classes.countainer}>
                <Leftsidebar/>
                <Divider orientation={'vertical'} className={classes.divider}/>
                <div className={classes.content}>
                    {props.children}
                </div>
                <Divider orientation={'vertical'} className={classes.divider}/>
                <Rightsidebar/>
                
            </div>
                
            </div>
        );
    }
    
    
export default App ;
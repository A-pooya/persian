import React from 'react';
import UseStyles from './mainstyle';
import Mheader from './components/Mainheader';
import { Divider } from '@material-ui/core';
import AddTwitt from './components/addtwitt';
import TwittersList from './components/TwittersList';
import HomeIcon from '@material-ui/icons/Home';
import { toast } from 'react-toastify';
import { useEffect, useState } from 'react';
import {getAllTwitts} from "../../../api/twittsApi";
import { useTwittDispatch, useTwittState , setTweetList } from '../../../Context/Context';


const Main = () => {
    const classes = UseStyles()
  //const [twitts , settwitts] = useState([])
   const {TweetList} = useTwittState()
   const TwittDispatch = useTwittDispatch()

useEffect(() => {
    updatetwitt()
},[])

const updatetwitt =  () => {
  getAllTwitts((isok , data) => {
    if(!isok){
        return toast.error("توییت ها ارسال نشد")    
    }
    else{
      setTweetList(TwittDispatch ,data)
    }
})
}


    return (
        <div className = {classes.root}>
         <Mheader Title={"خانه"} Icon={<HomeIcon/>} />
         <Divider className={classes.divider}/>
         <AddTwitt updatetwitt = {updatetwitt}/>
         <Divider className={classes.divider}/>
         <TwittersList data={TweetList} />
        </div>
      );
}
 
export default Main ;
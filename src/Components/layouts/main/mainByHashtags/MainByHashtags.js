import React, { useEffect } from 'react';
import UseStyles from '../mainstyle';
import Mheader from '../components/Mainheader';
import { Divider } from '@material-ui/core';
import TwittersList from '../components/TwittersList';
import SearchIcon from '@material-ui/icons/Search';
import { postByHashtagRequest } from '../../../../api/twittsApi';
import { toast } from 'react-toastify';
import {useTwittDispatch ,useTwittState ,setTweetList} from "../../../../Context/Context"
import {useLocation} from "react-router-dom"


const MainByHashtags = (props) => {
  const classes = UseStyles();

  const Location = useLocation()
  const {TweetList} = useTwittState();
  const dispatch = useTwittDispatch()
  
useEffect(()=>{
  const data ={
    hashtag:props.match.params.hashtag
  }
 postByHashtagRequest(data , (isok , data)=>{
    if(isok){
      //toast.success(data.message)
      setTweetList(dispatch ,data.post)
    }
    else{
      toast.error(data)
    }
  })
  },[Location])

    return (
        <div className = {classes.root}>
         <Mheader Title={props.match.params.hashtag} Icon={<SearchIcon/>} />
         <Divider className={classes.divider}/>
         <TwittersList data={TweetList} />
        </div>
      );
}
 
export default MainByHashtags ;
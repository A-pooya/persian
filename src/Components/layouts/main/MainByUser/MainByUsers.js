import React, { useEffect } from 'react';
import UseStyles from '../mainstyle';
import Mheader from '../components/Mainheader';
import { Divider } from '@material-ui/core';
import TwittersList from '../components/TwittersList';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import {useTwittDispatch ,useTwittState ,setTweetList} from "../../../../Context/Context"
import {useLocation} from "react-router-dom"
import {postByUserRequest, postByUserRequestu} from "../../../../api/twittsApi"
import { toast } from 'react-toastify';

// const TwittPost = [{
//   User:{
//       img:"/images/samsung.png",
//       name:"samsung",
//       id:"@samsung.ir"
//   },
//   text:"گوشی جدید سامسونگ با نام #s30 در 15 اکتبر رونمایی خواهد شد",
//   likesCount:"178",
// },
// {
// User:{
//   img:"/images/movie.png",
//   name:"movieSoft",
//   id:"@MOvIE_SOFT.ir"
// },
// text:"#سریع و خشن 9 روی پرده سینما ",
// likesCount:"88",
// },
// {
//   User:{
//       img:"/images/sports.jpg",
//       name:"SportMotion",
//       id:"@Sport_motion.ir"
//   },
//   text:" تیم #فوتبال بانوان #برزیل #قهرمان جام جهانی فوتبال زنان شد ",
//   likesCount:"69",
//   },
// ]

const MainByUsers = (props) => {
    const classes = UseStyles();

    const location = useLocation()

    const dispatch = useTwittDispatch();
    const {TweetList} = useTwittState();

    useEffect(()=>{
const data = {
  username:props.match.params.name
}

      postByUserRequest(data,(isok ,data)=>{
        if(isok){
          
          setTweetList(dispatch,data.postsByUser)
        }
        else{
          toast.error(data)
        }
      })
    }
    ,[location])

    return (
        <div className = {classes.root}>
         <Mheader Title={props.match.params.name} Icon={<AccountCircleIcon/>} />
         <Divider className={classes.divider}/>
         <TwittersList data={TweetList} />
        </div>
      );
}
 
export default MainByUsers ;
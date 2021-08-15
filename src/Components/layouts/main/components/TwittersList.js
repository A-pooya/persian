import { ButtonBase, Divider, Grid,Typography, } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import UseStyles from '../mainstyle';
import CachedIcon from '@material-ui/icons/Cached';
import FavoriteIcon from '@material-ui/icons/Favorite';
import {handleLikes} from "../../../../api/twittsApi";
import { toast } from 'react-toastify';
import { useTwittDispatch, useTwittState , setTweetText , setTweetLikes  } from '../../../../Context/Context';

const renderTwitt = (text) => {
    return {__html:  text.replace(/#\S+/g , "<a href='/tags/$&' style='color:cornflowerblue;text-decoration:none'>$&</a>" )}
      
}



const TwittersList = ({data}) => {
    const classes = UseStyles();
    //console.log(data);
    if(data !== null && data !== undefined){
    return (
        <div className={classes.TwittersContainer}>
            {data.map(item => <Posts data={item} />)}
        </div>
    );}
    else{
        
        return (
            <div>
                لطفا برای مشاهده توییت ها صبر نمایید
            </div>
        )
    }
}


const Posts = ({data}) => {
const classes = UseStyles()

const TweetDispatch = useTwittDispatch()


const HandleLikeBtn = () => {
    const idForLike={
        id:data.textid
    }
    handleLikes(idForLike , (isok , data) => {
        if(isok){
            return toast.success(data.message)
        }
        return toast.error(data)
    })
    setTweetLikes(TweetDispatch , data.textid)
}

const HandleReTweet = () => {
setTweetText(TweetDispatch , data.text)
}


    return (
        <div className={classes.TwittersContainer}>
            <Grid container className={classes.TwittersContainer2}>
                <img src="/images/samsung.png" alt="ProfileIMG" className={classes.ProfileIMG}/>
                <Typography className={classes.TwitterName}>{data.name}</Typography>
                <Typography className={classes.TwitterId}>{data.username}</Typography>
            </Grid>
            <Grid container className={classes.TwittTextContainer}>
                <Typography dangerouslySetInnerHTML={renderTwitt(data.text)} className={classes.TwittText}></Typography>

            </Grid>
            { data.img &&   
        <div>
            <div className={classes.postImgContainer} style={{ backgroundImage:`url(${data.img})`}}>   
            </div>            
        </div>
        }
            <Grid container className={classes.TwittBtnContainer}>
                <ButtonBase  className={classes.RecatchIConBtn} onClick={HandleReTweet}>
                 <CachedIcon className={classes.RecatchIcon}/>
                </ButtonBase>
                <ButtonBase className={classes.LikeIconBtn} onClick={HandleLikeBtn}>
                 <FavoriteIcon className={classes.LikeIcon}/>
                </ButtonBase>
                <Typography className={classes.LikesCount}>{data.likes}</Typography>
            </Grid>
            <Divider style={{marginTop:"1rem"}} />
        </div> 

     );
}
 






 
export default TwittersList;
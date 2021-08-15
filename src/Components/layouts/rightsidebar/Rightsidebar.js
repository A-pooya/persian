import { ButtonBase, Typography } from '@material-ui/core';
import React, { useEffect, useState } from 'react';
import UseStyles from './rightstyle';
import {Grid} from "@material-ui/core"
import { Link } from 'react-router-dom';
import {toast} from "react-toastify";
import {getAllHashtags} from "../../../api/twittsApi"
import { useTwittDispatch, useTwittState , setHashtagList} from '../../../Context/Context';




const Rightsidebar = () => {
    const classes = UseStyles();

    const {Hashtags} = useTwittState();
    const Dispatch = useTwittDispatch();
    
   // const  [hashtags , sethashtags ] = useState([])

    useEffect(()=>{
        getAllHashtags((isok,data) => {
            if(!isok){
                return toast.error("هشتگ های داغ دریافت نشد لطفا صفحه را مجددا رفرش کنید")
            }
            else{ 
                
                  setHashtagList(Dispatch,data)
                }
        })
    },[])

   const handleHashtagBtn = () =>{
       
   }

    return ( 
        <div className = {classes.rightsidebar}>
         <Grid container className={classes.leftsidecontainer}>
             <Link to ={"/"}>
                <Grid item container direction={"row"} alignItems={"center"} justifyContent={"center"} >
                    <Grid item>
                        <Typography className={classes.Typography}>
                            توییتر فارسی
                        </Typography>
                    </Grid>
                    <Grid item>
                        <img src="/images/twitter-white.jpg" alt="twitter" className={classes.twitter}/>
                    </Grid>
                </Grid>
             </Link>
        </Grid>   
        <Grid container direction={"column"}>
            <Typography component={"h2"}  className={classes.hTypography}>
                داغ ترین هشتگ ها
            </Typography>
                
            {
            Hashtags.map(item =>
            <Link to={`/Hashtags/${item}`}>
            <ButtonBase className={classes.hashtagsbutton} onClick ={handleHashtagBtn}>
                <Grid container item direction={'row'} alignItems={"center"} className={classes.Hashtagscontainer}>
                    <img src="/images/main-hash.jpg" alt="hashtag" className={classes.hashtag}/>

                    <Typography className={classes.hashtagTypography}>
                    {item}
                    </Typography>
                </Grid>
            </ButtonBase>
            </Link>
                          
           )}

        </Grid>
        </div>
     );
    }
    
    
   
 
export default Rightsidebar;

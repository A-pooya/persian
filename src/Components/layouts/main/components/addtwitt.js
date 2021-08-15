import { Button, ButtonBase, Grid } from '@material-ui/core';
import React, { useRef, useState } from 'react';
import UseStyles from '../mainstyle';
import ImageIcon from '@material-ui/icons/Image';
import { toast} from "react-toastify";
import {sendNewTwitt} from "../../../../api/AuthApi";
import { useTwittDispatch, useTwittState , setTweetText as settwittText, setTweetList, setTweetText,updateHashtagList } from '../../../../Context/Context';




const AddTwitt = ({updatetwitt}) => {
const classes = UseStyles();

const uploadImageInpute = useRef()
//const[twittText , settwittText] = useState("");
const {TweetText:twittText} = useTwittState();
const TwittDispatch = useTwittDispatch()

const[postImage , setPostImage] = useState();
const[readerImage , setReaderimage] = useState();




const HandlePostImage = (e) => {
if(e.target.files && e.target.files.length > 0){
setPostImage(e.target.files[0]);

const reader = new FileReader();
reader.onload = (e)=>{
    setReaderimage(e.target.result)
}
reader.readAsDataURL(e.target.files[0])



}
}



const findHashtags = (text) => {
    const hashtagsArr = []
    const sentence = text;
    const pattern = /#\S+/g ;
    const result = sentence.match(pattern) ;
    if(result){
        result.forEach(item => {
        const slice = item.slice(1)
        hashtagsArr.push(slice)
        })
    return hashtagsArr
    }else{
        return null
    }
}
 




const confirmTwitt = () => {

   
    if(!twittText){
        return toast.warn("برای توییت کردن باید متنی را وارد کنید")
    }
    const hash = findHashtags(twittText)
console.log(hash);
    const username = localStorage.getItem("username")
    const name =  localStorage.getItem("name")
    if(postImage && hash){
            
            const formdata = new FormData();
            formdata.append("img" , postImage);
            formdata.append("text" , twittText );
            formdata.append("username" , username );
            formdata.append("name" , name );
            formdata.append("hashtags" , hash);

            sendNewTwitt(formdata , (isok , data)=>{
                if(!isok){
                    return toast.error(data)
                }
                else{
                    toast.success(data.message)
                    updatetwitt()
                    setTweetText(TwittDispatch,"")
                    setReaderimage("")
                    return updateHashtagList(TwittDispatch)
                }
            })
            return
    }if(!postImage && hash){
        const formdata = new FormData();
        formdata.append("text" , twittText );
        formdata.append("username" , username );
        formdata.append("name" , name );
        formdata.append("hashtags" , hash);

        sendNewTwitt(formdata , (isok , data)=>{
            if(!isok){
                return toast.error(data)
            }
            else{
                toast.success(data.message)
                updatetwitt()
                setTweetText(TwittDispatch,"")
                return updateHashtagList(TwittDispatch)
            }
        }) 
        return 
    }
    if(postImage && !hash){
        const formdata = new FormData();
        formdata.append("img" , postImage);
        formdata.append("text" , twittText );
        formdata.append("username" , username );
        formdata.append("name" , name );

        sendNewTwitt(formdata , (isok , data)=>{
            if(!isok){
                return toast.error(data)
            }
            else{
                toast.success(data.message)
                setTweetText(TwittDispatch,"")
                setReaderimage("")
                return updatetwitt()
            }
        })
        return
    }
    else{
        const formdata = new FormData();
        
        formdata.append("text" , twittText );
        formdata.append("username" , username);
        formdata.append("name" , name );

        sendNewTwitt(formdata , (isok , data)=>{
            if(!isok){
                return toast.error(data)
            }
            else{
                toast.success(data.message)
                setTweetText(TwittDispatch,"")
                return updatetwitt()
            }
        })
    }
}


    return ( 
    <div className={classes.AddTwittRoot}>
        <Grid container className={classes.ImgTextareaContainer}>
          
            <img src="images/samsung.png" alt="samsung" className={classes.NewtwittImg}/>
            <textarea placeholder={"توییت کن"}
             className={classes.textarea} 
             value = {twittText} 
             onChange={(e) => settwittText(TwittDispatch,e.target.value)}></textarea>
          
        </Grid>
        { readerImage &&   
        <div>
            <div className={classes.postImgContainer} style={{ backgroundImage:`url(${readerImage})`}}>   
            </div>            
        </div>
        }
        <Grid container direction={"row-reverse"} className={classes.TwittBtnContainer}>
            <Button variant={"contained"} color={"primary"} className={classes.TwittBtn} onClick={confirmTwitt}>توییت</Button>
            <ButtonBase style={{marginLeft:"1rem"}}>
            <ImageIcon color={"primary"} 
            className={classes.PictureIcon} 
            style={{height:"2rem",width:"2rem"}}
            onClick={() => uploadImageInpute.current.click()}
            >

            </ImageIcon>
            </ButtonBase>
        </Grid>
        <input type={"file"} style={{display:'none'}} ref={uploadImageInpute} onChange = {HandlePostImage} />
    </div>
     );
}
 

export default AddTwitt;
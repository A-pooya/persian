import { makeStyles } from '@material-ui/core/styles';
import theme from "../../theme"

const UseStyles = makeStyles({
    root: {
        color:theme.palette.secondary.main ,    
        order:0,
        background:theme.palette.background,
        display:"flex",
        flexDirection:"column", 
        padding:"1rem 2rem",
        width:"100%",
        textAlign:"center",
        overflow:"auto"
    },
    divider:{
        backgroundColor:theme.palette.divider,
        marginTop:"2rem",
    },
    HeaderTitle:{
        marginRight:"0.5rem",
        fontWeight:'800',
        fontSize:"1.2rem",
    },
    AddTwittRoot:{
        display:"flex",
        marginTop:'1rem',
        flexDirection:"column",
    },
    ImgTextareaContainer:{
        maxHeight:"5rem",
        minHeight:"4rem",
    },
    postImgContainer:{
        width:"10rem" , 
        height:"5rem",
        backgroundSize:"contain",
        backgroundRepeat:"no-repeat",
        margin:"1rem"
    },
    NewtwittImg:{
        maxWidth:"4rem",
        minHeight:"4rem",
        borderRadius:"50%"
    },

    textarea:{
        flex:1,
        backgroundColor:theme.palette.primary.main,
        border:"none",
        marginRight:"1rem",
        color:theme.palette.secondary.main,
        outline:"unset"
    },
    TwittBtnContainer:{
        marginTop:"1rem",
    },
    TwittBtn:{
        minWidth:"32.2rem",
        borderRadius:"1rem",
        lineHeight:"1rem",
        boxShadow:"0px 5px 8px black",
    },

    PictureIcon:{
        height:"2rem",width:"2rem"
    },
    TwittersContainer:{
        display:"flex",
        flexDirection:"column",

    },
    ProfileIMG:{
        maxHeight:"5rem",
        height:"3rem",
        maxWidth:"5rem",
        width:"3rem",
        borderRadius:"50%",
        marginTop:"1rem"
    },
    TwitterName:{
        margin:"1.2rem 1rem 0 0"
    },
    TwitterId:{
        margin:"1.2rem 1rem 0 0",
        fontsize:"0.7rem",
        color:"#8d9196"
    },
    TwittTextContainer:{
        justifyContent:"center"
    },
    TwittText:{
        alignSelf:"center"
    },
    Hashtags:{
        color:"skyblue"
    },
    TwittBtnContainer:{
        flexDirection:"row-reverse",
        marginTop:"0.5rem",
    },
    RecatchIConBtn:{
        marginRight:"0.5rem",

    },
    LikesCount:{
        color:"#8d9196",
        fontsize:"1rem",
        marginLeft:"0.4rem",
    },
    LikeIcon:{
        color:"red"
    },


})

export default UseStyles ; 

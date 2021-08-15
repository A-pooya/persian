import { makeStyles } from '@material-ui/core/styles';
import theme from "../../theme"


const UseStyles = makeStyles({
   

   
    rightsidebar:{
        order:-1,
        
        // display:"flex",
        // flexDirection:"row",
        
        width:"20%",
        backgroundColor:theme.palette.primary.main,
        
        
    },
   
    divider:{
        backgroundColor:theme.palette.divider,
    },

    twitter:{
        width:"2rem",
        height:"2rem",

    },
    Typography:{
        color:theme.palette.secondary.main,
        marginLeft:"1rem",
        fontSize:"1.5rem"
    },
    leftsidecontainer:{
         margin:"2rem 0",
         justifyContent:'center',
    },
    hashtag:{
        width:"2rem !important",
        height:"2rem  !important",
        marginRight:"2rem"
    },
    hashtagTypography:{
        color:theme.palette.secondary.main,
        marginRight:"1rem"
    },
    hTypography:{
        color:theme.palette.secondary.main,
        margin:"2rem 2rem",
        fontSize:"2rem"

    },
    hashtagsbutton:{
        color:theme.palette.secondary.main,
        width:"100%",

    },
    Hashtagscontainer:{
        marginTop:"1rem",
    }


  });

  export default UseStyles ; 

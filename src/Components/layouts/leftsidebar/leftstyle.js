import { makeStyles } from '@material-ui/core/styles';
import theme from "../../theme"

const UseStyles = makeStyles({
    leftsidebar:{
        order:1,
        padding:"1rem 1rem",
        display:"flex",
        justifyContent:"flex-start",
        width:"25%",
        backgroundColor:theme.palette.primary.main,
        textAlign:'center',
        },
    Ccontainer:{
        flexDirection:"row-reverse",

    },
    DivImg:{
       margin:"1.5rem 1rem",
       height:"5rem"
        
    }, 
    Cimg:{
        width:"3rem",
        height:"3rem",
        overflow:"hide",
        borderRadius:"50%"
   },
   Cproperty:{
       alignItems:"flex-start",
       marginLeft:"0.5rem",
       marginTop:'1.5rem',
       width:"max-content",
       height:"5rem"
       

   },
   Cid:{
       color:theme.palette.secondary.main,
       fontSize:"1rem"
   },
   Cname:{
       color:theme.palette.secondary.main,
       fontSize:"1rem"
   },
   divider:{
    
    backgroundColor:theme.palette.divider,
    height:"1px",
    width:"194px",
   },
   bestreporters:{
    color:"#fff",
    marginRight:"1rem",
   },
   MainDiv:{
       width:"100%",
   },
   DivImg2:{
          margin:"1rem",
          height:"2rem",
   },
   Cproperty2:{
       height:"3rem",
       alignItems:"flex-start",
       marginLeft:"0.5rem",
       marginTop:'1.5rem',
       width:"max-content",
   },
   container2:{
       backgroundColor:theme.palette.background,
       justifyContent:"center",
       alignSelf:"center",
       width:'230px',
       borderRadius:"1.5rem"
   },
   UsersBtn:{
       width:"100%",
       color:theme.palette.secondary.main
   },
   Link:{
       width:"100%"
   },
   MenuItem : {
       backgroundColor:"black",
       height:"2rem"
   },
   Menu:{
       marginTop:"2rem",
       marginLeft:"1rem",
   }
})






export default UseStyles ; 

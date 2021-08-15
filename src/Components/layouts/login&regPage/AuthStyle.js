import {makeStyles} from "@material-ui/core";
import theme from "../../theme"

const useStyles = makeStyles({

    paper:{
        display :"flex",
        backgroundColor: theme.palette.primary.main,
        marginTop:"5rem",
        width:"30rem",
        flexDirection:"column",
        alignItems:"stretch",
        borderRadius:"1rem",
        boxShadow:"0.5rem 0.5rem 0.9rem black "
        
    },
    Title:{
        fontWeight:"bold",
        margin:'1rem 1rem',
        fontSize:'1.5rem',
        color:"skyblue"
    },
    Tabs:{

    },
    LoginTab:{
        width:"240px",
        "&:focus":{color:"white"},
        backgroundColor:"cornflowerblue",
        border:"1px solid #ccc",
        borderTop:"none",
        borderBottom:"none"
       
    },
  
    inputs:{
        margin:"0 1rem",
        color:"white",
        display:"block"
    },
    inputeTitles:{
        margin:"1rem 1rem"
    },
    Btn:{
        backgroundColor:"blue",
        margin:"1rem 1rem"
    }

})

export default useStyles;
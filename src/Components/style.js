import { makeStyles } from '@material-ui/core/styles';
import theme from "./theme"


const UseStyles = makeStyles({
    countainer:{
        display:"flex",
        width:"100%",
        justifyContent:"stretch",
        height:"100vh"
        
    },
    divider:{
        backgroundColor:"#f1f1f1"
    },
    columnDiv:{
        display:"flex",
        flexDirection:"column",
        width:"100%",
    },
    content:{
        width:"60%",
        display:"flex"
    },
    loadBox:{
        display:"flex",
        flexDirection:"column",
        justifyContent:"center",
        alignItems:"center",
        
    },
    loading:{
        marginBottom:"0.5rem"
    }
})


export default UseStyles;
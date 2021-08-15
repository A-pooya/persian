import {makeStyles} from "@material-ui/core";
import theme from "../../theme";

const UseStyles = makeStyles({
    Navbar:{
        display:"flex",
        position:"sticky",
        top:0,
        backgroundColor:"white",
        height:"7%"
    },
    NavbarContainer:{
        alignItems:"center",
    },
    AItem:{
        marginRight:"2rem",
        textDecoration:"none",
        color:theme.palette.primary.main,
        "&:hover":{color:"skyblue"}
    },

})


export default UseStyles;
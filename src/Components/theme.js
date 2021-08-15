import {createTheme} from "@material-ui/core"

const theme = createTheme({
    overrides:{
        MuiTypography:{
            root:{
                fontFamily:"Yekan !important"
            }
        }
    },
    palette:{
        type:"dark",
        primary:{
            main:"#303030",
            light:"rgba(255, 255, 255, 0.12)",
            
        },
        secondary:{
            main:"#fff",
            light:"rgba(255, 255, 255, 0.08)",
            dark:"rgba(255, 255, 255, 0.16)",
        },
        background:"#424242",
        divider:"rgba(255, 255, 255, 0.12)",
        
        
    }
})

export default theme;
import React from 'react';
import { Grid,ButtonBase ,Divider} from '@material-ui/core';
import UseStyles from "../mainstyle"
import { Typography } from '@material-ui/core';
import HomeIcon from '@material-ui/icons/Home';

const Mheader = ({Title,Icon}) => {
    const classes = UseStyles()
    return (        
            <Grid container>
                {Icon}
                <Typography className={classes.HeaderTitle} >{Title}</Typography>           
            </Grid>
     );
}
 
export default Mheader;
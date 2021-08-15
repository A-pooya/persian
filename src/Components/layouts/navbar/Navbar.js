import { Grid, Typography } from '@material-ui/core';
import React from 'react';
import UseStyles from './navbarstyle';


const Navbar = () => {
    const classes = UseStyles()
    return ( 
        <div className={classes.Navbar} >
             <Grid container className={classes.NavbarContainer}>
             <a href="/"  className={classes.AItem}>خانه</a>
             <a href="/Hashtags/هشتگ ها"  className={classes.AItem}>هشتگ ها</a>
             <a href="/User/کاربرها"  className={classes.AItem}>کاربرها</a>
             </Grid>
            
        </div>
     );
}
 
export default Navbar;
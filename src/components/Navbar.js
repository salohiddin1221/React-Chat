import * as React from 'react';
import {AppBar, Box, Toolbar, Typography, Button, Grid} from '@material-ui/core';
import { LOGIN_ROUTE } from '../util/const';
import { Link } from 'react-router-dom';
import { useAuthState } from 'react-firebase-hooks/auth';
import { auth } from '../firebase';

export default function Navbar() {
  const [user] = useAuthState(auth)
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            LifeHackDev
          </Typography>
          <Grid container justifyContent={'flex-end'}>
            {user ? <Button onClick={()=>{auth.signOut()}} color="inherit" variant='outlined'>Quit</Button> :
              <Link to={LOGIN_ROUTE}>
              <Button color="inherit" variant='outlined'>Login</Button>
              </Link>
             
            }
          
         
          </Grid>
          
        </Toolbar>
      </AppBar>
    </Box>
  );
}
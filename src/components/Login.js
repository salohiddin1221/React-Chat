import { Box, Button, Container, Grid } from '@material-ui/core'
import React from 'react'
import { GoogleAuthProvider } from 'firebase/auth'
import { auth } from '../firebase'


const Login = () => {

  const login = async () => {
    const { user } = await auth.signInWithPopup(new GoogleAuthProvider())
    console.log(user)
  }


  return (
    <Container>
      <Grid container alignItems='center' justifyContent='center'
          style={{height: 'calc(100vh - 64px)'}}>
        <Grid style={{ width: 400, background: "lightgray" }}
           container alignItems='center' justifyContent='center'
        >
          <Box p={5}>
          <Button onClick={login} variant='outlined'>Sign In With Google</Button>
          </Box>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Login
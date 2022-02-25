import React from 'react'
import {  Container, Grid } from '@material-ui/core'

const  Loader = () => {
  return (
    <Container>
      <Grid container alignItems='center' justifyContent='center'
          style={{height: 'calc(100vh - 64px)'}}>
        <Grid  container alignItems='center' justifyContent='center'
        >
           <div className="lds-dual-ring"></div>
        </Grid>
      </Grid>
    </Container>
  )
}

export default Loader 
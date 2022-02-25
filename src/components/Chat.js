import { Avatar, Button, Container, Grid, TextField } from '@material-ui/core'
import React, {useState} from 'react'
import { useAuthState } from 'react-firebase-hooks/auth'
import { auth, db } from '../firebase'
import { useCollectionData } from 'react-firebase-hooks/firestore'
import Loader from './Loader'
import {collection, orderBy, addDoc, serverTimestamp} from "firebase/firestore"

function Chat() {
  const [user] = useAuthState(auth)
  const [value, setValue] = useState('')
  const colRef = collection(db, 'messages');

  const [messages, loading] = useCollectionData(colRef, orderBy('createdAt'))

  const sendMessage = () => {
    addDoc(colRef, {
      uid: user.uid,
      text: value,
      displayName: user.displayName,
      createdAt: serverTimestamp(),
      photoURL: user.photoURL
    })
    setValue('')
  }
  if(loading) return <Loader/>
  return (
    <Container>
      <Grid container style={{height: "calc(100vh - 74px)"}} justifyContent="center" alignContent='center'>
        
        <div
          style={
            {
              width: "80%",
              height: "60vh", 
              borderRadius: "10px", 
              border: "1px solid gray",
              overflowX: "auto",
              backgroundColor: "gray"
            }
        }
        >
          {
            messages.map((m) => (
              <div
                style={{
                  margin: "10px",
                  backgroundColor: m.uid === user.uid ? "lightgreen" : "white",
                  width: "40%",
                  padding: "10px",
                  marginLeft: m.uid === user.uid ? "auto" : "0px",
                  borderRadius: "10px",
              }}
              >
                <Grid
                  style={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "space-between"
                  }}
                >
                  <Avatar src={m.photoURL} />
                  <div> {m.displayName} </div>
                  </Grid>
                <div
                style={{
                    padding: "5px",
                    marginTop: "5px",
                     borderRadius: "10px",
                   backgroundColor: m.uid === user.uid ? "white" : "lightgreen",
                }}
                >{m.text}</div>
                </div>
            ) )
          }

        </div>
        <Grid container direction='column'
          justifyContent='center'
          alignContent='flex-end'
        style={{
          width: "80%",
        }}
        >
          <TextField fullWidth placeholder='Enter Message' variant='outlined'
          
            value={value}
            onChange={(e) => setValue(e.target.value)} 
            style={{
              marginTop: "10px",
              outline: "none",
            }}
          />
          <Button variant='outlined'
            onClick={sendMessage}
            style={{
              marginTop: "10px",
              backgroundColor: "gray",
            }}>
            Send Message</Button>

        </Grid>
      </Grid>
    </Container>
  )
}

export default Chat
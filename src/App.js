import React, { useState, useEffect } from 'react';
import './App.css';
import { Button, FormControl, InputLabel, Input } from '@material-ui/core';
import Message from './Message'; 
import db from './firebase';
import firebase from 'firebase';

function App() {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState('');

  useEffect(()=>{
    db.collection('messages').onSnapshot(snapshot =>{
      setMessages(snapshot.docs.map(doc => doc.data()))
    })
  }, []
  )
    // run once when the app component

  useEffect(() => {
    setUsername(prompt('Please enter your name'))
  }, []
  )

  console.log(input);
  console.log(messages);

  const sendMessage = (event) => {
      // all the logic to send a message goes
      event.preventDefault();

      db.collection('messages').add({
        message: input,
        username: username,
        timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })
      
      setInput('');

  }
  return (
    <div className="App">
      <h1>Hello Clever Programmer!</h1>
      <h2>Welcom {username}</h2>   
      <form>
      <FormControl>
        <InputLabel>Enter a message...</InputLabel>
        <Input value = {input} onChange = {event => setInput(event.target.value)}/>
        <Button disabled = {!input} variant='contained' color = "primary" type = 'submit' onClick = {sendMessage} >Send Message</Button>
      </FormControl>
      </form>
      {/* messages themselves */}
      {
        messages.map(message =>(
          <Message username={username} message={message} />
        ))
      }

    </div>
  );
}

export default App;

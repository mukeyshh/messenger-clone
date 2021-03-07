import "./App.css";
import React,{ useState,useEffect } from "react";
import { Button, FormControl, InputLabel, Input } from "@material-ui/core";
import Message from "./Message";
import db from "./firebase";
import firebase from 'firebase';
import Flipmove from 'react-flip-move';
import SendIcon from '@material-ui/icons/Send';
import { IconButton } from '@material-ui/core';



function App() {
  const [input, setInput] = useState("");
  const [messages, setMessages] = useState([]);
  const [username, setUsername] = useState({});
 

    useEffect(() => {
      db.collection("messages")
        .orderBy("timestamp", "desc")
        .onSnapshot((snapshot) =>
          {setMessages(snapshot.docs.map((doc) => {id:doc.id , message:doc.data()}))
    })
    }, [])

  useEffect(() => {
    setUsername(prompt('please enter your name'))
  }, [])

  const sendMessage = (e) => {
    e.preventDefault();

    db.collection('messages').add({
      message:input,
      username:username,
      timestamp:firebase.firestore.FieldValue.serverTimestamp(),
    })
    //all the logic to send message
    setMessages([...messages, {username:username,message:input}])
    setInput("");
  };
  return (
    <div className="App">
      <img src="https://facebookbrand.com/wp-content/uploads/2020/10/Logo_Messenger_NewBlurple-399x399-1.png?w=399&h=399" />
      <h1>Messenger clone</h1>
      <h2>hello {username}</h2>

      <form className="app__form">
        <FormControl className="app__fromControl">
          <Input className="app__Input" placeholder="Enter a message..." value={input} onChange={(e) => setInput(e.target.value)} />

          <IconButton
          className="app__iconButton"
           disabled={!input}
           variant="contained"
           color="primary"
           type="submit"
           onClick={sendMessage}
          >
            <SendIcon />
          </IconButton>
         
        </FormControl>
      </form>

      <Flipmove>
      { 
      messages.map(({id,message}) => (
        <Message key={id} username={username} message={message} />
      ))
      }
      </Flipmove>

      
    </div>
  );
}

export default App;

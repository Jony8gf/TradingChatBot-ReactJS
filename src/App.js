import React from 'react';
import Chatbot from 'react-chatbot-kit'
import 'react-chatbot-kit/build/main.css'
import './App.css';
import ActionProvider from './ActionProvider';
import config from './config';
import MessageParser from "./MessageParser";


function App() {

  return (
    <>
      <div className="Titulo">
        <h2>Trading Bot</h2>
      </div>
      <div className="App">  
      <div className="ChatbotApp">
        <Chatbot config={config} actionProvider={ActionProvider} messageParser={MessageParser}  />
      </div>
    </div>
    </>
    
  );
}

export default App;

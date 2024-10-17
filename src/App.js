import React from 'react';
import Chatbot from 'react-chatbot-kit';

import config from './chatbot/Config';
import ActionProvider from './chatbot/ActionProvider';
import MessageParser from './chatbot/MessageParser';

import './App.css';
import 'react-chatbot-kit/build/main.css';

function App() {
  return (
    <div className='App'>
        <Chatbot
          config={config}
          actionProvider={ActionProvider}
          messageParser={MessageParser}
        />
     </div>
  );
}

export default App;
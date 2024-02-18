import React from 'react';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Chat from './views/chatbot/chat/chat';
import History from './views/chatbot/history/history';
import Main from './views/chatbot/main/main';
import './App.css'

function App() {
  return (
    <Router>
      <div className="App">
	      <Routes>
	        <Route path="/" element={React.Fragment> <History /> <Main /> <React.Fragment /> } />
	        <Route path="/chat" element={<React.Fragment> <History /> <Chat /> <React.Fragment /> } />
	      </Routes>
      </div>
    </Router>
  );
}

export default App;

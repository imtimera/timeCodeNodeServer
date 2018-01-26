import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import VoiceRecognition from './components/VoiceComponents/VoiceRecognition.js'
import MenuPanel from './components/AppComponents/MenuPanel.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <VoiceRecognition/>
        <MenuPanel></MenuPanel>
      
      </div>
    );
  }
}

export default App;

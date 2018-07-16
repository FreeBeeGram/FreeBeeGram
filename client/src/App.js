import React, { Component } from 'react';
import Main from './components/Main/Main';
import './App.css';

const App = ({ children }) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default App;

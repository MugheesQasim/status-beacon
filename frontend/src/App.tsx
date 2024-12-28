import React from 'react';
import './App.css';
import Signup from './pages/Signup';

const App: React.FC =()=> {
  return (
    <div className="App">
      <h1>Status Checking website</h1>
      <Signup/>
    </div>
  );
}

export default App;

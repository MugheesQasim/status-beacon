import React from 'react';
import './App.css';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Signup from './pages/Signup';
import Login from './pages/Login';
import Home from './pages/Home';

const App: React.FC = () => {
  return (
    <BrowserRouter>
      <div className="App min-h-screen flex flex-col items-center justify-center">
        <h1>Status Checking Website</h1>
        <div className="flex justify-center space-x-20 mt-4">
          {/* Use React Router Link for navigation */}
          <Routes>
            <Route path="/" element={<Home/>}/>
            <Route path="/signup" element={<Signup />} />
            <Route path="/login" element={<Login />} />
          </Routes>
          {/* Buttons for navigation */}
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;

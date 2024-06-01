import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import News from './components/News'; 
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/About';
import Home from './components/Home';
import Login from './components/Login';
import AuthProvider from './components/AuthContext';
import Admin from './components/Admin';
function App() {
  const [mode, setMode] = useState('white');
  const [alert, setAlert] = useState(null);
  const showAlert = (message, type) => {
    setAlert({
      msg: message,
      type: type
    });

    setTimeout(() => {
      setAlert(null);
    }, 2500);
  };

  const toggleMode = () => {
    const newMode = mode === 'white' ? 'dark' : 'white';
    setMode(newMode);
    document.body.style.backgroundColor = newMode === 'dark' ? "black" : "white";
    showAlert(`${newMode === 'dark' ? 'Dark' : 'Light'} Mode Enabled`, "success");
    document.title = `SahajGunaso - ${newMode === 'dark' ? 'Dark' : 'Light'} Mode`;
  };

  return (
    <div>
    <AuthProvider>
    <BrowserRouter>
      <Navbar title="SahajGunaso" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
      <Route exact path="/home" element={<Home/>} />
        <Route exact path="/Form" element={<Form mode={mode} showAlert={showAlert} />} />
        <Route exact path="/About" element={<About mode={mode} />} />
        <Route exact path="/News" element={<News mode={mode} />} />
        <Route exact path="/login" element={<Login />} />
        <Route exact path="/admin" element={<Admin />} />
      </Routes>
      <Footer mode={mode} />
    </BrowserRouter>
    </AuthProvider>
    </div>
  );
}

export default App;

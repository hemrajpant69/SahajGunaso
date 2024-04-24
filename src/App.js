import React, { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import News from './components/News';
import NewsItem from './components/NewsItem';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import About from './components/About';

function App() {
  const [mode, setMode] = useState('white');
  const [alert, setAlert] = useState(null);
  const [title, setTitle] = useState('SahajGunaso News');
  const [description, setDescription] = useState('SahajGunaso');
  const [imgurl, setimgurl] = useState("https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg");
  const [newsurl, setnewsurl] = useState("http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket");



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
    <BrowserRouter>
      <Navbar title="SahajGunaso" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route exact path="/Form" element={<Form mode={mode} showAlert={showAlert} />} />
        <Route exact path="/About" element={<About mode={mode} />} />
        <Route exact path="/News" element={<News mode={mode} title={title} description={description} imgurl={imgurl} newsurl={newsurl}/>} /> 
      </Routes>
      <Footer mode={mode} />
    </BrowserRouter>
  );
}

export default App;
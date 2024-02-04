//import logo from './logo.svg';
import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Navbar from './components/Navbar';

function App() {
  const [mode, setMode]=useState('white'); // Checking Whether Dark mode is enabled of not
  const toggleMode = ()=>{
if(mode==='white'){
  setMode('dark')
  document.body.style.backgroundColor="black"


}else{
  setMode('white')
  document.body.style.backgroundColor="white"
}
  }
  return (
    <>
<Navbar title="SahajGunaso" mode={mode} toggleMode={toggleMode}/>
<Form mode={mode}/>
<Footer/>

    </>
  );
}

export default App;

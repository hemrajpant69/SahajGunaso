import { useState } from 'react';
import './App.css';
import Footer from './components/Footer';
import Form from './components/Form';
import Navbar from './components/Navbar';
import Alert from './components/Alert';
import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import About from './components/About';

function App() {
  const [mode, setMode] = useState('white'); // Checking Whether Dark mode is enabled or not
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
    if (mode === 'white') {
      setMode('dark');
      document.body.style.backgroundColor = "black";
      showAlert("Dark Mode Enabled", "success");
      document.title = "SahajGunaso-Dark Mode";
    } else {
      setMode('white');
      document.body.style.backgroundColor = "white";
      showAlert("Light Mode Enabled", "success");
      document.title = "SahajGunaso-Light Mode";
    }
  };

  return (
    <BrowserRouter>
      <Navbar title="SahajGunaso" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <Routes>
        <Route
          exact
          path="/Form"
          element={<Form mode={mode} showAlert={showAlert} />}
        />
        <Route
          exact
          path="/About"
          element={<About mode={mode} />}
        />
        <Route
          exact
          path="/"
          element={<Form mode={mode} showAlert={showAlert} />}
        />
      </Routes>
      <Footer mode={mode} />
    </BrowserRouter>
  );
}

export default App;

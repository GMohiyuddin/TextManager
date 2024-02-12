
import { useState } from 'react';
import './App.css';
import About from './Componant/About';
import NavbarJs from './Componant/Navbar';
import Textform from './Componant/Textform';
import Alert from './Componant/Alert';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";


function App() {
  const [mode, setMode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message,type)=>{
    setalert ({
      msg: message,
      type: type
    })
    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark')
      document.body.style.backgroundColor = '#3a3a3a'
      showAlert("Enabled Dark Mode", "success")
    } else {
      setMode('light')
      document.body.style.backgroundColor = 'white'
      showAlert("Disable Dark Mode", "success")
    }
  }

  return (
    <>
    <Router>
      <NavbarJs title="Text Manager" about="About_Us" mode={mode} toggleMode={toggleMode} />
      <Alert alert={alert} />
      <div className="container my-3" >
        <Routes>
          <Route excact path="/about" element= {<About mode={mode}/>}/>
          <Route excact path="/" element={
            <Textform heading='Enter the text below' mode={mode}  showAlert={showAlert} />}/> 
        </Routes>
      </div>
    </Router>
    </>
  );
}

export default App;

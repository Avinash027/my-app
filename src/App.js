import './App.css';
// eslint-disable-next-line no-unused-vars
import Navbar from './components/navbar';
import Textform from './components/textform';
import About from './components/about';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Alert from './components/Alert';
import { useState } from 'react';

function App() {
  // eslint-disable-next-line no-unused-vars
  const [mode, setMode] = useState('light');
  const [alert, setAlert] = useState(null);

    const showAlert = (message , type) => {
      const showAlert = (message,type) => 
      setAlert({
        msg:message,
        type:type
      })    
    }
  

  const toggleMode = () => {
    if (mode === 'light') {
      setMode('dark');
      document.body.style.backgroundColor = '#343a40'; // Dark background color
    } else {
      setMode('light');
      document.body.style.backgroundColor = 'white';  // Light background color
    }
  };

  return (
    <>
      <Navbar title="TextUtils" aboutText="about site" mode={mode} toggleMode={toggleMode} />
      <Alert Alert="this is alert"/>
      <div className="container my-3" toggleMode={toggleMode}>
        <Textform heading="Enter the text to be transformed" mode={mode}/>
        {/* <About /> */}
      </div>
    </>
  );
}

export default App;

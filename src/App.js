import './App.scss';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useState } from 'react';

import HomePage from './pages/HomePage/HomePage';

function App() {

      // set darkmode toggle
      const [mode, setMode] = useState('light');

      // function to toggle darkmode
      function toggleDarkMode() {
          let darkToggleClass = document.querySelector('.App');
          if (mode === 'light') {
              setMode('dark');
              darkToggleClass.classList.add('dark');
              console.log('switched to dark mode');
          } else {
              setMode('light');
              darkToggleClass.classList.remove('dark');
              console.log('switched to light mode');
          }
      }

  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage mode={mode} toggleDarkMode={toggleDarkMode} />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

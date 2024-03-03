import React, { useState } from 'react'

const Theme = () => {
    const [darkMode, setDarkMode] = useState(false);
  
    const toggleTheme = () => {
      setDarkMode(!darkMode);
      document.documentElement.classList.toggle('dark-mode');
    };
  
    return (
      <button
        id="toggle"
        onClick={toggleTheme}
        className={darkMode ? 'dark-mode' : ''}
      >
        <div
          className={`toggle-inner ${darkMode ? 'toggle-active' : ''}`}
        ></div>
      </button>
    );
};

export default Theme
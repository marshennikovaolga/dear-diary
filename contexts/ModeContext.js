import React, { createContext, useContext, useState } from 'react'

const ModeContext = createContext()

export const ModeProvider = ({ children }) => {
    const [currentMode, setCurrentMode] = useState(() => {
      if (typeof window !== 'undefined') {
        const savedMode = localStorage.getItem('currentMode');
        return savedMode ? savedMode : 'black';
      } else {
        return 'black';
      }
    });
  
    const toggleTheme = () => {
      const newMode = currentMode === 'black' ? 'white' : 'black';
      setCurrentMode(newMode);
      if (typeof window !== 'undefined') {
        localStorage.setItem('currentMode', newMode);
      }
    };
  
    return (
      <ModeContext.Provider value={{ currentMode, toggleTheme }}>
        {children}
      </ModeContext.Provider>
    );
  };
  
  export const useMode = () => {
    return useContext(ModeContext);
  };
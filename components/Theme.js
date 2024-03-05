import React, { useState, useEffect } from 'react'

const Theme = () => {
    const [darkMode, setDarkMode] = useState(false);

    useEffect(() => {
        const currentMode = localStorage.getItem('currentMode');
        if (currentMode) {
            setDarkMode(currentMode === 'black' ? false : true)
            document.documentElement.classList.toggle('dark-mode', currentMode === 'white')
        }
    }, []);

    const toggleTheme = () => {
        const newMode = darkMode ? 'black' : 'white';
        setDarkMode(!darkMode);
        localStorage.setItem('currentMode', newMode);
        document.documentElement.classList.toggle('dark-mode');
    };

    return (
        <button
            id="toggle"
            onClick={toggleTheme}
            className={darkMode ? 'dark-mode' : ''}>
            <div className={`toggle-inner ${darkMode ? 'toggle-active' : ''}`}></div>
        </button>
    );
};

export default Theme
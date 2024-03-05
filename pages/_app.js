import React, { useState, useEffect } from 'react'
import { ModeProvider } from '../contexts/ModeContext'
import '../styles/globals.css'

function MyApp({ Component, pageProps }) {
    const [currentMode, setCurrentMode] = useState('black');

    useEffect(() => {
        const savedMode = localStorage.getItem('currentMode');
        if (savedMode) {
            setCurrentMode(savedMode);
        }
    }, []);

    const toggleTheme = () => {
        const newMode = currentMode === 'black' ? 'white' : 'black';
        setCurrentMode(newMode);
        localStorage.setItem('currentMode', newMode);
    };

    return (
        <ModeProvider value={{ currentMode, toggleTheme }}>
            <Component {...pageProps} />
        </ModeProvider>
    )
}

export default MyApp
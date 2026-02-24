import React, { useState } from 'react';

function DarkLightMode() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleTheme = () => {
        setIsDarkMode(!isDarkMode);
    }

    const themeStyles = {
        container: {
            backgroundColor: isDarkMode ? '#121212' : '#ffffff',
            color: isDarkMode ? '#ffffff' : '#000000',
            minHeight: '100vh',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            alignItems: 'center',
            transition: 'all 0.3s ease'
        },
        button: {
            padding: '10px 20px',
            fontSize: '1rem',
            backgroundColor: isDarkMode ? '#ffffff' : '#000000',
            color: isDarkMode ? '#000000' : '#ffffff',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            transition: 'all 0.3s ease'
        }
    }

    return (
        <div style={themeStyles.container}>
            <h1>
                {isDarkMode ? 'Dark Mode' : 'Light Mode'}
            </h1>
            <button 
                style={themeStyles.button}
                onClick={toggleTheme}
            >
                {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
            </button>
        </div>
    )
}

export default DarkLightMode;
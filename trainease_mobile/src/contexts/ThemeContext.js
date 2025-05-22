import React, { createContext, useState, useEffect, useContext } from 'react';

// Create context for theme management
const ThemeContext = createContext();

// PUBLIC_INTERFACE
/**
 * Theme provider component that manages dark/light theme state
 * @param {Object} props - Component props
 * @returns {JSX.Element} ThemeProvider component
 */
export const ThemeProvider = ({ children }) => {
  // Check if a theme preference exists in localStorage, default to 'dark'
  const [theme, setTheme] = useState(() => {
    const savedTheme = localStorage.getItem('trainease-theme');
    return savedTheme || 'dark';
  });

  // Update document body class when theme changes
  useEffect(() => {
    const rootElement = document.documentElement;
    
    // Clear previous theme classes
    rootElement.classList.remove('dark-theme', 'light-theme');
    
    // Add current theme class
    rootElement.classList.add(`${theme}-theme`);
    
    // Save theme preference to localStorage
    localStorage.setItem('trainease-theme', theme);
  }, [theme]);

  // Function to toggle between themes
  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'dark' ? 'light' : 'dark');
  };

  // Context value to be provided
  const contextValue = {
    theme,
    toggleTheme,
    isDarkTheme: theme === 'dark'
  };

  return (
    <ThemeContext.Provider value={contextValue}>
      {children}
    </ThemeContext.Provider>
  );
};

// PUBLIC_INTERFACE
/**
 * Custom hook to use the theme context
 * @returns {Object} Theme context value
 */
export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (context === undefined) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};

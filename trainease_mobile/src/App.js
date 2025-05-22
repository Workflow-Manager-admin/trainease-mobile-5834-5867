import React from 'react';
import './App.css';
import { ThemeProvider } from './contexts/ThemeContext';
import MainContainer from './components/MainContainer';

/**
 * Main App component for TrainEase Mobile
 * @returns {JSX.Element} App component
 */
function App() {
  return (
    <ThemeProvider>
      <div className="app">
        <MainContainer />
      </div>
    </ThemeProvider>
  );
}

export default App;

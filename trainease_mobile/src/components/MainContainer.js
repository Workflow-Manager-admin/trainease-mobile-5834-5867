import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import TrainCard from './TrainCard';
import mockTrains from '../data/mockTrains';

// PUBLIC_INTERFACE
/**
 * MainContainer component that displays train listings with theme switching functionality
 * @returns {JSX.Element} MainContainer component
 */
const MainContainer = () => {
  const { theme, toggleTheme } = useTheme();
  const [searchQuery, setSearchQuery] = useState('');

  // Filter trains based on search query
  const filteredTrains = mockTrains.filter(train => 
    train.destination.toLowerCase().includes(searchQuery.toLowerCase()) ||
    train.origin.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className={`main-container ${theme}-theme`}>
      <div className="app-header">
        <div className="app-header-content">
          <div className="logo">
            <span className="logo-symbol">🚆</span> 
            <span className="logo-text">TrainEase</span>
          </div>
          
          <button className="theme-toggle" onClick={toggleTheme} aria-label="Toggle theme">
            {theme === 'dark' ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
      
      <div className="search-section">
        <h1 className="main-title">Find Your Train</h1>
        <p className="main-subtitle">Search for available trains and book your tickets</p>
        
        <div className="search-container">
          <input 
            type="text" 
            className="search-input" 
            placeholder="Search by destination or origin..." 
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
        </div>
      </div>
      
      <div className="trains-container">
        <h2 className="section-title">Available Trains</h2>
        
        {filteredTrains.length > 0 ? (
          <div className="trains-list">
            {filteredTrains.map(train => (
              <TrainCard key={train.id} train={train} />
            ))}
          </div>
        ) : (
          <div className="no-results">
            <p>No trains found matching your search.</p>
          </div>
        )}
      </div>
      
      <div className="app-footer">
        <p>© 2023 TrainEase Mobile. All rights reserved.</p>
      </div>
    </div>
  );
};

export default MainContainer;

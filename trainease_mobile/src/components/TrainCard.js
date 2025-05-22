import React from 'react';
import { useTheme } from '../contexts/ThemeContext';

// PUBLIC_INTERFACE
/**
 * TrainCard component for displaying individual train information
 * @param {Object} props.train - Train data to display
 * @returns {JSX.Element} TrainCard component
 */
const TrainCard = ({ train }) => {
  const { isDarkTheme } = useTheme();
  
  return (
    <div className={`train-card ${isDarkTheme ? 'dark' : 'light'}`}>
      <div className="train-card-header">
        <div className="train-name">{train.trainName}</div>
        <div className="train-number">{train.trainNumber}</div>
      </div>
      
      <div className="train-card-content">
        <div className="train-route">
          <div className="train-origin">
            <div className="label">From</div>
            <div className="value">{train.origin}</div>
          </div>
          
          <div className="train-route-divider">
            <div className="train-route-line"></div>
            <div className="train-route-icon">→</div>
            <div className="train-route-line"></div>
          </div>
          
          <div className="train-destination">
            <div className="label">To</div>
            <div className="value">{train.destination}</div>
          </div>
        </div>
        
        <div className="train-times">
          <div className="train-departure">
            <div className="label">Departure</div>
            <div className="value">{train.departureTime}</div>
            <div className="platform">Platform {train.platform}</div>
          </div>
          
          <div className="train-duration">
            <div className="duration-label">Duration</div>
            <div className="duration-value">{train.duration}</div>
          </div>
          
          <div className="train-arrival">
            <div className="label">Arrival</div>
            <div className="value">{train.arrivalTime}</div>
          </div>
        </div>
      </div>
      
      <div className="train-card-footer">
        <div className="train-availability">
          <span className={train.seatsAvailable < 10 ? 'limited' : ''}>
            {train.seatsAvailable} seats available
          </span>
        </div>
        
        <div className="train-price">
          <div className="price-value">{train.currency} {train.price.toFixed(2)}</div>
          <button className="select-btn">Select</button>
        </div>
      </div>
    </div>
  );
};

export default TrainCard;

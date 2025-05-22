/**
 * Mock data for train listings
 * Contains information about train routes, times, and pricing
 */

const mockTrains = [
  {
    id: 1,
    trainNumber: 'TE-1234',
    trainName: 'Express Voyager',
    origin: 'New York',
    destination: 'Boston',
    departureTime: '08:00 AM',
    arrivalTime: '12:30 PM',
    duration: '4h 30m',
    price: 89.99,
    currency: 'USD',
    seatsAvailable: 42,
    platform: '3A'
  },
  {
    id: 2,
    trainNumber: 'TE-5678',
    trainName: 'Coastal Link',
    origin: 'Los Angeles',
    destination: 'San Francisco',
    departureTime: '09:15 AM',
    arrivalTime: '03:45 PM',
    duration: '6h 30m',
    price: 129.50,
    currency: 'USD',
    seatsAvailable: 18,
    platform: '1B'
  },
  {
    id: 3,
    trainNumber: 'TE-9012',
    trainName: 'Mountain Explorer',
    origin: 'Denver',
    destination: 'Salt Lake City',
    departureTime: '10:30 AM',
    arrivalTime: '05:45 PM',
    duration: '7h 15m',
    price: 115.75,
    currency: 'USD',
    seatsAvailable: 27,
    platform: '2C'
  },
  {
    id: 4,
    trainNumber: 'TE-3456',
    trainName: 'City Shuttle',
    origin: 'Chicago',
    destination: 'Milwaukee',
    departureTime: '03:30 PM',
    arrivalTime: '05:00 PM',
    duration: '1h 30m',
    price: 45.25,
    currency: 'USD',
    seatsAvailable: 54,
    platform: '4B'
  },
  {
    id: 5,
    trainNumber: 'TE-7890',
    trainName: 'Southern Star',
    origin: 'Atlanta',
    destination: 'Nashville',
    departureTime: '07:45 AM',
    arrivalTime: '11:15 AM',
    duration: '3h 30m',
    price: 78.50,
    currency: 'USD',
    seatsAvailable: 8,
    platform: '5A'
  }
];

export default mockTrains;

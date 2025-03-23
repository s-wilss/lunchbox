import React, { useEffect, useRef } from 'react';
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css'; 

// Set your Mapbox access token
mapboxgl.accessToken = 'pk.eyJ1Ijoic3dpbHNzIiwiYSI6ImNtN2RhOHZsOTAxMjkybXB3NXpqdHYxZGgifQ.E-xet5qyC2UppM0lIK80wQ';

// Define popup styles outside the component
const popupStyles = `
  .mapboxgl-popup .mapboxgl-popup-content {
    text-align: center;
    padding: 15px;
    border: 4px solid rgb(19, 51, 29);
    border-radius: 4px;
    background-color: rgba(255, 255, 255, 0.363) !important; 
  }
  
  .fight-details h3 {
    margin-top: 0;
    font-weight: bold;
    color: rgb(19, 51, 29);
    font-family: 'Trade Winds', serif;
  }
  
  .fight-details p {
    margin: 5px 0;
    font-family: 'Trade Winds', serif;
  }
  
  .fight-date {
    font-style: italic;
  }
`;

const ProfessionalFights = () => {
  const mapContainerRef = useRef(null);
  const styleRef = useRef(null);
  
  // First useEffect for setting up styles
  useEffect(() => {
    // Add custom CSS for popup styling
    const styleElement = document.createElement('style');
    styleElement.textContent = popupStyles;
    document.head.appendChild(styleElement);
    
    // Save reference to remove it later
    styleRef.current = styleElement;
    
    // Clean up when component unmounts
    return () => {
      if (styleRef.current) {
        document.head.removeChild(styleRef.current);
      }
    };
  }, []); // Run once on mount
  
  // Second useEffect for map initialization
  useEffect(() => {
    // Make sure the container ref is available
    if (!mapContainerRef.current) return;
    
    // Initialize map
    const map = new mapboxgl.Map({
      container: mapContainerRef.current,
      style: 'mapbox://styles/mapbox/dark-v11',
      center: [132.828, -24.811],
      zoom: 2.6
    });
    
    // Fight information for map
    const fights = [
      {
        location: [115.8516, -31.9484], // Perth
        title: "Foxbox 205",
        mainEvent: "Callaghan vs Brigham",
        date: "2025-04-15",
        venue: "RAC Arena"
      },
      {
        location: [151.2093, -33.8688], // Sydney
        title: "UFC Fight Night",
        mainEvent: "Snoke vs Dallis",
        date: "2025-06-20",
        venue: "Qudos Bank Arena"
      },
      {
        location: [144.9364, -37.7892], // Melbourne
        title: "UFC 308",
        mainEvent: "Cerwin vs Moult",
        date: "2025-07-08",
        venue: "Melbourne Pavillion"
      }
    ];
    
    // Wait for map to load before adding markers
    map.on('load', () => {
      // Add markers and popups for each fight
      fights.forEach(fight => {
        // Create popup
        const popup = new mapboxgl.Popup({ offset: 25 })
          .setHTML(
            `<div class="fight-details">
              <h3>${fight.title}</h3>
              <p>${fight.mainEvent}</p>
              <p>${fight.venue}</p>
              <p class="fight-date">${fight.date}</p>
            </div>`
          );

        // Create marker
        new mapboxgl.Marker({
          color: "#00FF00" // Green
        })
          .setLngLat(fight.location)
          .setPopup(popup)
          .addTo(map);
      });

      // Add zoom and rotation controls
      map.addControl(new mapboxgl.NavigationControl());

      // Add fullscreen control
      map.addControl(new mapboxgl.FullscreenControl());
    });
    
    // Clean up on unmount
    return () => map.remove();
  }, []); // Empty dependency array means this effect runs once on mount
  
  return (
    <div style={{ width: '100%', height: '100%' }}>
      <h3 style={{ textAlign: 'center', fontFamily: 'Trade Winds, serif', color: 'white', fontSize: '25px', marginLeft: '-600px' }}>
        Professional Fights
      </h3>
      <div 
        ref={mapContainerRef} 
        style={{ 
          width: '60%', 
          height: '70%', // Subtract header height
          borderRadius: '8px',
          marginLeft:'50px'
        }} 
        role="presentation" // Important for your test
      />
    </div>
  );
};

export default ProfessionalFights;
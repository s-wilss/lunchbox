import React, { useEffect } from 'react';
import styled from 'styled-components';
import mapboxgl from 'mapbox-gl';

// Professional Fights map:
mapboxgl.accessToken = 'pk.eyJ1Ijoic3dpbHNzIiwiYSI6ImNtN2RhOHZsOTAxMjkybXB3NXpqdHYxZGgifQ.E-xet5qyC2UppM0lIK80wQ';

// Fight information for map, in array format
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

const ProFightTitleCont = styled.div`
    font-size: 25px;
    font-family: 'Trade Winds', serif;
    text-align: center;
    width: 40%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 10px;
`;

const MapCont = styled.div`
    width: 100%;
    height: 500px;
    border-radius: 8px;
    margin: 0 auto; 
    display: block; 
    margin-top: 0px;%;
    
`;

const ProfessionalFights = () => {
    useEffect(() => {
        // Initialize the Mapbox map only when the component has mounted (DOM is ready)
        const map = new mapboxgl.Map({
            container: 'map', // The id of the div where the map will be rendered
            style: 'mapbox://styles/mapbox/dark-v11', // Dark theme style
            center: [132.828, -24.811], // Starting position [lng, lat]
            zoom: 2.6 // Starting zoom level
        });

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
            new mapboxgl.Marker({ color: "#00FF00" }) // Green
                .setLngLat(fight.location)
                .setPopup(popup)
                .addTo(map);
        });

        // Add zoom and rotation controls
        map.addControl(new mapboxgl.NavigationControl());

        // Add fullscreen control
        map.addControl(new mapboxgl.FullscreenControl());

        // Cleanup map when component unmounts to prevent memory leaks
        return () => map.remove();
    }, []); // Empty dependency array ensures this effect runs once when the component mounts

    return (
        <div className='ProfessionalFights'>
            <ProFightTitleCont>
                <h3>Professional Fights</h3>
            </ProFightTitleCont>
            <MapCont id="map"></MapCont> 
        </div>
    );
};
export default ProfessionalFights;
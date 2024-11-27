// import React, { useEffect } from 'react';
// import { Platform } from 'react-native';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; 

// // Only import Leaflet for Web
// if (Platform.OS === 'web') {
//   import('HomeScreen'); // Import the leaflet CSS only for the web
// }

// const WebMap = () => {
//   useEffect(() => {
//     if (Platform.OS === 'web') {
//       // Web-specific code for initializing Leaflet map
//       const L = require('leaflet');

//       const map = L.map('map').setView([51.505, -0.09], 13); // Example initial coordinates
//       L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
//         attribution: '© OpenStreetMap contributors',
//       }).addTo(map);
//     }
//   }, []);

//   if (Platform.OS === 'web') {
//     return <div id="map" style={{ width: '100%', height: '100%' }}></div>; // Web-specific render
//   }

//   // You can return a placeholder or different component for non-web platforms
//   return (
//     <MapView
//       provider={PROVIDER_GOOGLE}
//       style={{ width: '100%', height: '100%' }}
//       initialRegion={{
//         latitude: 37.78825, // Replace with your initial coordinates
//         longitude: -122.4324, // Replace with your initial coordinates
//         latitudeDelta: 0.0922,
//         longitudeDelta: 0.0421,
//       }}
//     />
//   );
// };

// export default WebMap;

// import React, { useState } from 'react';
// import { View, Text, Image, Switch, StyleSheet, Platform } from 'react-native';
// import MapView, { PROVIDER_GOOGLE } from 'react-native-maps'; // For the native map
// import WebMap from '../components/WebMap'; // Import your web-compatible map component

// const HomeScreen = () => {
//   const [isOnline, setIsOnline] = useState(true); // Switch state for online/offline
//   const toggleSwitch = () => {
//     setIsOnline(!isOnline);
//   };

//   return (
//     <View style={styles.container}>
//       {/* Conditionally render the map based on the platform */}
//       <View style={styles.mapContainer}>
//         {Platform.OS === 'web' ? (
//           <WebMap /> // Use the WebMap component for web
//         ) : (
//           <MapView
//             provider={PROVIDER_GOOGLE}
//             style={styles.map}
//             initialRegion={{
//               latitude: 37.78825, // Replace with your initial coordinates
//               longitude: -122.4324, // Replace with your initial coordinates
//               latitudeDelta: 0.0922,
//               longitudeDelta: 0.0421,
//             }}
//           />
//         )}
//       </View>

//       {/* Header Layout at the Top */}
//       <View style={styles.headerLay}>
//         <Text style={styles.activeStatus}>
//           {isOnline ? 'Online' : 'Offline'}
//         </Text>
//         <Switch
//           value={isOnline}
//           onValueChange={toggleSwitch}
//           style={styles.switch}
//         />
//       </View>

//       {/* Offline Layout */}
//       {!isOnline && (
//         <View style={styles.offlineLayout}>
//           <Image
//             source={require('../assets/images/offline_icon.png')} // Correct path
//             style={styles.iconOnOff}
//           />
//           <Text style={styles.offlineText}>You're offline</Text>
//           <Text style={styles.offlineSubText}>
//             Go online to start accepting rides.
//           </Text>
//         </View>
//       )}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: 'white',
//   },
//   mapContainer: {
//     flex: 1,
//   },
//   map: {
//     flex: 1,
//   },
//   headerLay: {
//     position: 'absolute',
//     top: 0,
//     left: 0,
//     right: 0,
//     padding: 13,
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     zIndex: 1,
//   },
//   activeStatus: {
//     fontFamily: 'Montserrat-SemiBold',
//     fontSize: 20,
//     color: '#6200EE', // Use your primary color here
//   },
//   switch: {
//     transform: [{ scaleX: 1.2 }, { scaleY: 1.2 }],
//   },
//   offlineLayout: {
//     position: 'absolute',
//     bottom: 20,
//     left: 20,
//     right: 20,
//     backgroundColor: 'red',
//     padding: 20,
//     borderRadius: 8,
//     zIndex: 2,
//   },
//   iconOnOff: {
//     width: 39,
//     height: 39,
//   },
//   offlineText: {
//     fontFamily: 'Montserrat-SemiBold',
//     fontSize: 20,
//     color: 'white',
//     marginTop: 10,
//   },
//   offlineSubText: {
//     fontFamily: 'Montserrat-SemiBold',
//     fontSize: 15,
//     color: 'white',
//     marginTop: 5,
//   },
// });

// export default HomeScreen;

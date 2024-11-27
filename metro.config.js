// Learn more https://docs.expo.io/guides/customizing-metro
const { getDefaultConfig } = require('expo/metro-config');
const path = require('path');

/** @type {import('expo/metro-config').MetroConfig} */
const config = getDefaultConfig(__dirname);

module.exports = {
  resolver: {
    blacklistRE: /react-native-maps\/lib\/MapMarkerNativeComponent\.js/,
    assetExts: ['png', 'jpg', 'jpeg', 'gif', 'bmp', 'webp','svg'], // Ensure these file types are handled as assets
  },
  watchFolders: [
    path.resolve(__dirname, 'assets'), // Add the 'assets' directory to the watch folders
  ],
};

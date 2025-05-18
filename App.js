/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {StyleSheet, Text} from 'react-native';
import {calcSize} from './src/components/Responsive';

function App() {
  return (
    <Text style={styles.quicksandRegular}>
      This text uses a quick sand font
    </Text>
  );
}

const styles = StyleSheet.create({
  text: {fontSize: calcSize(24), fontWeight: '600', color: 'black'},
  quicksandRegular: {
    fontFamily: 'Montserrat-Bold',
    fontSize: 20,
  },
});

export default App;

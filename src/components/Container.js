import {SafeAreaView, StatusBar, StyleSheet, Platform} from 'react-native';
import React from 'react';
import {Col} from './Flex';
import {calcSize} from './Responsive';

const STATUSBAR_HEIGHT = StatusBar.currentHeight;

const StatusBarBox = props => {
  const {statusBarColor, barStyle, translucent} = props || {};

  return (
    <StatusBar
      translucent={translucent === false ? false : true}
      backgroundColor={statusBarColor || '#ffffff'}
      barStyle={barStyle || 'dark-content'}
      {...props}
    />
  );
};

const MyStatusBar = props => {
  const {statusBarColor} = props || {};

  return Platform.OS === 'ios' ? (
    <Col
      fullWidth
      style={{
        ...styles.statusBar,
        backgroundColor: statusBarColor || '#ffffff',
      }}>
      <SafeAreaView>
        <StatusBarBox {...props} />
      </SafeAreaView>
    </Col>
  ) : (
    <StatusBarBox {...props} />
  );
};

const Container = props => {
  const {
    children,
    backgroundColor,
    containerStyle,
    justify = 'flex-start',
    align = 'flex-start',
    gap = 0,
  } = props || {};

  return (
    <Col
      flex
      fullWidth
      style={{
        ...styles.mainBox,
        ...(backgroundColor ? {backgroundColor} : {}),
      }}>
      <MyStatusBar {...props} />

      <Col
        fullWidth
        flex
        style={{
          ...(containerStyle ? containerStyle : styles.containerBox),
          ...(backgroundColor ? {backgroundColor} : {}),
          ...(Platform.OS === 'ios' ? {} : {marginTop: calcSize(31)}),
        }}
        justify={justify}
        align={align}
        gap={gap}>
        {children}
      </Col>
    </Col>
  );
};

export default Container;

const styles = StyleSheet.create({
  mainBox: {backgroundColor: '#ffffff'},
  containerBox: {
    paddingHorizontal: calcSize(18),
    paddingVertical: calcSize(22),
    backgroundColor: '#ffffff',
  },
  statusBar: {height: STATUSBAR_HEIGHT},
});

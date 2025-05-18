import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Platform,
  Alert,
  BackHandler,
  ScrollView,
  RefreshControl,
} from 'react-native';
import React, {useCallback, useEffect, useState} from 'react';
import {Col} from './Flex';
import {calcSize} from './Responsive';
import {useNavigation} from '@react-navigation/native';
import {useCheckInternet} from '../utils/useIsConnected';
import NoInternetScreen from '../screens/NoInternetScreen';

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
    handleBackPress,
    fetchData,
  } = props || {};

  const navigation = useNavigation();

  const [refreshing, setRefreshing] = useState(false);
  const {isConnected, checkConnection} = useCheckInternet();

  const backAction = useCallback(() => {
    if (handleBackPress) return handleBackPress();
    if (navigation.canGoBack()) {
      navigation.goBack();
    } else {
      Alert.alert('Exit App', 'Do you want to exit?', [
        {text: 'Cancel', style: 'cancel'},
        {text: 'Exit', onPress: () => BackHandler.exitApp()},
      ]);
    }
    return true;
  }, [handleBackPress, navigation]);

  // Android hardware back
  useEffect(() => {
    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction,
    );
    return () => backHandler.remove();
  }, [backAction, navigation]);

  // iOS gesture/button back
  useEffect(() => {
    const unsubscribe = navigation.addListener('beforeRemove', e => {
      e.preventDefault();
      backAction();
    });
    return unsubscribe;
  }, [backAction, navigation]);

  // Pull to refresh
  const onRefresh = useCallback(async () => {
    if (!fetchData) return;
    setRefreshing(true);
    await checkConnection();
    if (isConnected) {
      await fetchData();
    }
    setRefreshing(false);
  }, [fetchData, isConnected, checkConnection]);

  return (
    <Col
      flex
      fullWidth
      style={{
        ...styles.mainBox,
        ...(backgroundColor ? {backgroundColor} : {}),
      }}>
      <MyStatusBar {...props} />

      <ScrollView
        style={styles.scrollBox}
        contentContainerStyle={styles.scrollContainer}
        refreshControl={
          fetchData ? (
            <RefreshControl refreshing={refreshing} onRefresh={onRefresh} />
          ) : undefined
        }>
        {!isConnected && fetchData ? (
          <NoInternetScreen onRetry={fetchData} />
        ) : (
          <>
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
          </>
        )}
      </ScrollView>
    </Col>
  );
};

export default Container;

const styles = StyleSheet.create({
  scrollBox: {width: '100%', flex: 1},
  scrollContainer: {
    flexGrow: 1,
    width: '100%',
    height: '100%',
  },
  mainBox: {
    backgroundColor: '#ffffff',
    width: '100%',
    height: '100%',
  },
  containerBox: {
    paddingHorizontal: calcSize(18),
    paddingVertical: calcSize(22),
    backgroundColor: '#ffffff',
  },
  statusBar: {height: STATUSBAR_HEIGHT},
});

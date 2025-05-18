import {Button, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';

const NoInternetScreen = ({onRetry}) => {
  return (
    <SafeAreaView style={styles.noInternetScreen}>
      <StatusBar barStyle="dark-content" />
      <Text>No Internet Connection</Text>
      <Button title="Retry" onPress={onRetry} />
    </SafeAreaView>
  );
};

export default NoInternetScreen;

const styles = StyleSheet.create({
  noInternetScreen: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

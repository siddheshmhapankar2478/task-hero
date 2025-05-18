import {Button, SafeAreaView, StatusBar, StyleSheet, Text} from 'react-native';
import ResponsiveText from '../components/ResponsiveText';

const NoInternetScreen = ({onRetry}) => {
  return (
    <SafeAreaView style={styles.noInternetScreen}>
      <StatusBar barStyle="dark-content" />
      <ResponsiveText>No Internet Connection</ResponsiveText>
      <Button title="Retry" onPress={onRetry} />
    </SafeAreaView>
  );
};

export default NoInternetScreen;

const styles = StyleSheet.create({
  noInternetScreen: {flex: 1, justifyContent: 'center', alignItems: 'center'},
});

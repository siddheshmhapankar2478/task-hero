import React, {useCallback} from 'react';
import {View, Text, Alert} from 'react-native';
import Container from '../components/Container';
import ResponsiveText from '../components/ResponsiveText';

const HomeScreen = () => {
  const fetchData = useCallback(async () => {}, []);

  const handleBackPress = () => {
    Alert.alert('Custom back press on HomeScreen');
    return true;
  };

  return (
    <Container
      fetchData={fetchData}
      handleBackPress={handleBackPress}
      statusBarColor="#F8F8F8">
      <View>
        <ResponsiveText>Home Scresen</ResponsiveText>
      </View>
    </Container>
  );
};

export default HomeScreen;

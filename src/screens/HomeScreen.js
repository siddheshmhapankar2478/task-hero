import React, {useCallback} from 'react';
import {View, Text, Alert} from 'react-native';
import ScreenWrapper from '../components/ScreenWrapper';
import Container from '../components/Container';

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
        <Text>Home Scresen</Text>
      </View>
    </Container>
  );
};

export default HomeScreen;

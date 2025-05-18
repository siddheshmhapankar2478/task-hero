import NetInfo from '@react-native-community/netinfo';
import {useState} from 'react';

export const useCheckInternet = () => {
  const [isConnected, setIsConnected] = useState(true);

  const checkConnection = async () => {
    const state = await NetInfo.fetch();
    setIsConnected(state.isConnected && state.isInternetReachable);
  };

  return {isConnected, checkConnection};
};

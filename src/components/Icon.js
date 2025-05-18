import React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import Feather from 'react-native-vector-icons/Feather';
import AntDesign from 'react-native-vector-icons/AntDesign';
import Entypo from 'react-native-vector-icons/Entypo';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Octicons from 'react-native-vector-icons/Octicons';

const ICON_MAP = {
  Ionicons,
  MaterialIcons,
  FontAwesome,
  Feather,
  AntDesign,
  Entypo,
  FontAwesome5,
  MaterialCommunityIcons,
  Octicons,
};

const Icon = props => {
  const {type = 'Ionicons', name, size = 24, color = 'black', style} = props;

  const IconComponent = ICON_MAP[type];

  return <IconComponent name={name} size={size} color={color} style={style} />;
};

export default Icon;

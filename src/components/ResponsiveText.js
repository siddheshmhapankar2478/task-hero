import React from 'react';
import {Text} from 'react-native';
import {calcSize} from './Responsive';

// Font weight to Montserrat font mapping
const fontWeightToFamily = {
  100: 'Montserrat-Thin',
  200: 'Montserrat-ExtraLight',
  300: 'Montserrat-Light',
  400: 'Montserrat-Regular',
  500: 'Montserrat-Medium',
  600: 'Montserrat-SemiBold',
  700: 'Montserrat-Bold',
  800: 'Montserrat-ExtraBold',
  900: 'Montserrat-Black',
};

const ResponsiveText = props => {
  const {children, fontWeight = '400', fontSize = 12, style} = props || {};

  const fontFamily = fontWeightToFamily[fontWeight];

  return (
    <Text
      style={[
        {
          fontFamily,
          fontSize: calcSize(fontSize),
        },
        style,
      ]}
      {...props}>
      {children}
    </Text>
  );
};

export default ResponsiveText;

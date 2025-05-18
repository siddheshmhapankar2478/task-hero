import React from 'react';
import {Text} from 'react-native';
import {calcSize} from './Responsive';

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
  const {children, weight = '400', size = 12, style, ...rest} = props || {};

  const fontFamily = fontWeightToFamily[weight];

  return (
    <Text
      style={[
        {
          fontFamily,
          fontSize: calcSize(size),
        },
        style,
      ]}
      {...rest}>
      {children}
    </Text>
  );
};

export default ResponsiveText;

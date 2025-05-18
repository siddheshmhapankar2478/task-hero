import React from 'react';
import {
  TouchableOpacity,
  StyleSheet,
  Text,
  ActivityIndicator,
} from 'react-native';
import colors from '../styles/color';
import {calcSize, getDeviceType} from './Responsive';
import {Col} from './Flex';

const {darkBlue, mediumBlue} = colors;
const isTablet = getDeviceType() === 'tablet';

const Button = ({
  style = {},
  textStyle = {},
  onPress,
  disabled = false,
  activeOpacity = 0.8,
  disabledStyle = {},
  children,
  applyDefaultStyle = true,
  text,
  fullWidth = false,
  icon = null,
  type = 'button',
  loader = false,
  loaderColor = '#fff',
  minHeight,
}) => {
  const isLink = type === 'link';

  const commonTouchableProps = {
    onPress,
    activeOpacity,
    disabled: disabled || loader,
  };

  const renderLoader = () => (
    <ActivityIndicator
      color={loaderColor}
      size={isTablet ? 'large' : 'small'}
    />
  );

  if (isLink) {
    return (
      <TouchableOpacity {...commonTouchableProps} style={style}>
        {loader ? (
          <Col style={styles.loadingContainer}>{renderLoader()}</Col>
        ) : (
          <Text
            style={[
              styles.linkText,
              textStyle,
              disabled && styles.disabledLinkText,
              disabled && disabledStyle,
            ]}>
            {text}
          </Text>
        )}
      </TouchableOpacity>
    );
  }

  const buttonStyles = [
    applyDefaultStyle && styles.button,
    fullWidth && {width: '100%'},
    minHeight && {minHeight},
    disabled && styles.disabled,
    disabled && disabledStyle,
    style,
  ];

  return (
    <TouchableOpacity {...commonTouchableProps} style={buttonStyles}>
      {loader ? (
        renderLoader()
      ) : text ? (
        <>
          {icon}
          <Text style={[styles.buttonText, textStyle]}>{text}</Text>
        </>
      ) : (
        children
      )}
    </TouchableOpacity>
  );
};

export default Button;

const styles = StyleSheet.create({
  button: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: calcSize(10),
    backgroundColor: darkBlue,
    paddingVertical: calcSize(13),
    paddingHorizontal: calcSize(13),
    borderRadius: calcSize(12),
  },
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  linkText: {
    fontSize: calcSize(12),
    fontFamily: 'Poppins-SemiBold',
    color: mediumBlue,
    textDecorationLine: 'underline',
    textDecorationColor: mediumBlue,
  },
  buttonText: {
    color: 'white',
    fontSize: calcSize(18),
    lineHeight: calcSize(23),
    fontFamily: 'Poppins-SemiBold',
    textAlign: 'center',
  },
  disabled: {
    backgroundColor: 'rgba(17, 98, 164, 0.3)',
  },
  disabledLinkText: {
    color: '#adb5bd',
  },
});

import React from 'react';
import {StyleSheet, View} from 'react-native';

const MainView = props => {
  let {
    row = false,
    style,
    justify = 'flex-start',
    align = 'flex-start',
    gap,
    pH,
    pV,
    fullWidth,
    flex,
    children,
    ...restProps
  } = props || {};

  return (
    <View
      style={[
        row ? styles.rowView : styles.colView,
        {justifyContent: justify, alignItems: align},
        gap ? {gap} : {},
        pH ? {paddingHorizontal: pH} : {},
        pV ? {paddingVertical: pV} : {},
        fullWidth ? {width: '100%'} : {},
        flex ? {flex: 1} : {},
        style,
      ]}
      {...restProps}>
      {children}
    </View>
  );
};

export const Row = props => <MainView {...{...props, row: true}} />;
export const Col = props => <MainView {...props} />;

const styles = StyleSheet.create({
  rowView: {
    display: 'flex',
    flexDirection: 'row',
  },
  colView: {
    display: 'flex',
    flexDirection: 'col',
  },
});

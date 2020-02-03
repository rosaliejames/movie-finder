import * as React from 'react';
import {View, Text, StyleSheet, TouchableOpacity} from 'react-native';

export const Button: React.FunctionComponent<Props> = ({
  children,
  onPress,
  disabled,
}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={disabled ? [styles.wrapper, styles.disabled] : styles.wrapper}
      disabled={disabled}
    >
      <Text style={disabled ? [styles.text, styles.textDisabled] : styles.text}>
        {children}
      </Text>
    </TouchableOpacity>
  );
};

interface Props {
  onPress: () => void;
  disabled?: boolean;
}

const styles = StyleSheet.create({
  wrapper: {
    backgroundColor: '#D0D0D0',
    padding: 8,
    flex: 1,
    marginHorizontal: 4,
  },
  disabled: {
    backgroundColor: '#F8F8F8',
  },
  textDisabled: {
    color: '#B8B8B8',
  },
  text: {
    textAlign: 'center',
  },
});

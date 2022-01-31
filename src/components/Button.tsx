import React from 'react';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import theme, { Text } from './Theme';

type ButtonVariant = 'default' | 'primary';

const bgColors: Record<ButtonVariant, string> = {
  default: theme.colors.transparent,
  primary: theme.colors.primary1,
};

const colors: Record<ButtonVariant, string> = {
  default: theme.colors.neutral6,
  primary: theme.colors.neutral6,
};

interface ButtonProps extends RectButtonProps {
  label: string;
  variant?: ButtonVariant;
  shadow?: boolean;
}

const Button = ({ label, variant = 'default', shadow, ...rest }: ButtonProps) => {
  const backgroundColor = bgColors[variant];
  const color = colors[variant];

  const shadowStyle: StyleProp<ViewStyle> = shadow && {
    shadowColor: theme.colors.primary1,
    shadowOffset: { width: 0, height: 10 },
    shadowOpacity: 1,
    shadowRadius: 3,
    elevation: 5,
  };

  return (
    <RectButton style={[styles.container, { backgroundColor }, shadowStyle]} {...rest}>
      <Text variant="body1" style={{ color }}>
        {label}
      </Text>
    </RectButton>
  );
};

export default Button;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: 12,
    paddingHorizontal: 30,
    borderRadius: 24,
  },
});

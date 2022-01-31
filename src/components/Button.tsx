import { StyleSheet } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';
import theme, { Text } from './Theme';

type ButtonVariant = 'primary' | 'secondary';

interface ButtonProps extends RectButtonProps {
  label: string;
  variant?: ButtonVariant;
  shadow?: boolean;
}

const Button = ({ label, variant = 'primary', shadow, ...rest }: ButtonProps) => {
  const backgroundColor = variant === 'primary' ? theme.colors.primary1 : theme.colors.transparent;

  return (
    <RectButton style={[styles.container, { backgroundColor }, shadow && styles.shadow]} {...rest}>
      <Text variant="body1" color={variant === 'primary' ? 'white' : 'primary1'}>
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
    paddingHorizontal: 30,
    paddingVertical: 10,
    borderWidth: 1.75,
    borderRadius: 24,
    borderColor: theme.colors.primary1,
  },
  shadow: {
    shadowColor: theme.colors.primary1,
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.75,
    shadowRadius: 12,
    elevation: 5,
  },
});

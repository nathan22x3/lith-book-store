import { theme } from '@components/index';
import { ReactNode } from 'react';
import { StyleSheet } from 'react-native';
import { RectButton, RectButtonProps } from 'react-native-gesture-handler';

const BUTTON_SIZE = 36;

interface SocialButtonProps extends RectButtonProps {
  icon: ReactNode;
}

const SocialButton = ({ icon, ...rest }: SocialButtonProps) => {
  return (
    <RectButton style={styles.container} {...rest}>
      {icon}
    </RectButton>
  );
};

export default SocialButton;

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: BUTTON_SIZE,
    height: BUTTON_SIZE,
    borderRadius: BUTTON_SIZE / 2,
    marginHorizontal: theme.spacing.s,
  },
});

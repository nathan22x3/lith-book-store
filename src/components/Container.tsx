import { DEVICE_HEIGHT, IS_ANDROID } from '@utils/const';
import Constants from 'expo-constants';
import { ComponentProps, ReactNode } from 'react';
import { Box } from './Theme';

const EXTRA_SPACING = IS_ANDROID ? Constants.statusBarHeight : 0;

interface ContainerProps extends ComponentProps<typeof Box> {
  children: ReactNode;
}

const Container = ({ children, ...rest }: ContainerProps) => {
  return (
    <Box
      height={DEVICE_HEIGHT + EXTRA_SPACING}
      style={{ paddingTop: EXTRA_SPACING }}
      backgroundColor="white"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Container;

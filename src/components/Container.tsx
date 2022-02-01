import { DEVICE_HEIGHT } from '@utils/const';
import { ComponentProps, ReactNode } from 'react';
import { useSafeAreaInsets } from 'react-native-safe-area-context';
import { Box } from './Theme';

interface ContainerProps extends ComponentProps<typeof Box> {
  children: ReactNode;
}

const Container = ({ children, ...rest }: ContainerProps) => {
  const insets = useSafeAreaInsets();

  return (
    <Box
      style={{ paddingTop: insets.top, paddingBottom: insets.bottom }}
      height={DEVICE_HEIGHT + insets.top}
      px="l"
      backgroundColor="white"
      {...rest}
    >
      {children}
    </Box>
  );
};

export default Container;

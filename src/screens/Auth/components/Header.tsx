import { Box, Text } from '@components/index';
import { Image } from 'react-native';

const LOGO_WIDTH = 112;
const LOGO_HEIGHT = 96;

interface HeaderProps {
  title: string;
  subtitle: string;
}

const Header = ({ title, subtitle }: HeaderProps) => {
  return (
    <Box alignItems="center" pt="2xl">
      <Image
        source={require('@screens/Auth/assets/images/logo.png')}
        style={{ width: LOGO_WIDTH, height: LOGO_HEIGHT }}
      />
      <Text variant="title" mt="l" mb="xs">
        {title}
      </Text>
      <Text variant="body4" color="neutral4">
        {subtitle}
      </Text>
    </Box>
  );
};

export default Header;

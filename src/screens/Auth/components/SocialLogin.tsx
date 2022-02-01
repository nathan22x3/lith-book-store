import { Box, IconFacebook, IconGoogle, IconTwitter, Text } from '@components/index';
import SocialButton from './SocialButton';

const SocialLogin = () => {
  return (
    <Box alignItems="center" mt="l">
      <Text variant="headline1" mb="l" color="neutral4">
        OR
      </Text>
      <Box flexDirection="row" justifyContent="center">
        <SocialButton icon={<IconGoogle />} />
        <SocialButton icon={<IconFacebook />} />
        <SocialButton icon={<IconTwitter />} />
      </Box>
    </Box>
  );
};

export default SocialLogin;

import { Box, Text } from '@components/index';
import React from 'react';
import { TouchableOpacity } from 'react-native-gesture-handler';

interface FooterProps {
  content: string;
  action: string;
  onPress: () => void;
}

const Footer = ({ content, action, onPress }: FooterProps) => {
  return (
    <Box
      position="absolute"
      flexDirection="row"
      justifyContent="center"
      bottom={50}
      alignSelf="center"
    >
      <Text variant="body4" mr="xs">
        {content}
      </Text>
      <TouchableOpacity activeOpacity={0.75} {...{ onPress }}>
        <Text variant="body3" color="primary1">
          {action}
        </Text>
      </TouchableOpacity>
    </Box>
  );
};

export default Footer;

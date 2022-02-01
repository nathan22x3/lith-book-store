/* eslint-disable react-native/no-inline-styles */
import { Box, Text, Container, TextInput, IconBell } from '@components/index';
import { TouchableOpacity } from 'react-native';

const Home = () => {
  return (
    <Container>
      <Box flexDirection="row" alignItems="center" mt="s" mb="m">
        <Box flex={1} mr="m">
          <TextInput icon="search" placeholder="Search..." containerStyle={{ mb: 'none' }} />
        </Box>
        <TouchableOpacity>
          <IconBell />
        </TouchableOpacity>
      </Box>
      <Box mt="xs">
        <Text variant="title">From Your Library</Text>
      </Box>
    </Container>
  );
};

export default Home;

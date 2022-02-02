/* eslint-disable react-native/no-inline-styles */
import { Box, Container, IconBell, Text, TextInput } from '@components/index';
import { ReadingProgress } from '@screens/Home/components';
import { FlatList, TouchableOpacity } from 'react-native';
import { LIBRARY_BOOKS } from './mock';

const Home = () => {
  return (
    <Container>
      <Box flexDirection="row" alignItems="center" my="m">
        <Box flex={1} mr="m">
          <TextInput icon="search" placeholder="Search..." containerStyle={{ mb: 'none' }} />
        </Box>
        <TouchableOpacity>
          <IconBell />
        </TouchableOpacity>
      </Box>
      <Box mt="xs">
        <Text variant="title" mb="m">
          From Your Library
        </Text>
        <FlatList
          data={LIBRARY_BOOKS}
          renderItem={({ item: { title, cover } }) => <ReadingProgress {...{ title, cover }} />}
          keyExtractor={({ id }) => id}
          horizontal
          showsHorizontalScrollIndicator={false}
          ItemSeparatorComponent={() => <Box width={20} />}
        />
      </Box>
    </Container>
  );
};

export default Home;

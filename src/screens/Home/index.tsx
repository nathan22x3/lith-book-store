/* eslint-disable react-native/no-inline-styles */
import { Box, Container, IconBell, IconChevronRight, Text, TextInput } from '@components/index';
import { BookCard, COVER_WIDTH, ReadingProgress } from '@screens/Home/components';
import { IS_ANDROID, TAB_BAR_HEIGHT } from '@utils/const';
import { FlatList, TouchableOpacity } from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';
import { LIBRARY_BOOKS } from './mock';

const OFFSET = 20;

const Home = () => {
  return (
    <Container px="none">
      <Box flexDirection="row" alignItems="center" px="l" my="m">
        <Box flex={1} mr="m">
          <TextInput icon="search" placeholder="Search..." containerStyle={{ mb: 'none' }} />
        </Box>
        <TouchableOpacity>
          <IconBell />
        </TouchableOpacity>
      </Box>
      <ScrollView>
        <Box mt="xs">
          <Text variant="title" mx="l" mb="m">
            From Your Library
          </Text>
          <FlatList
            data={LIBRARY_BOOKS}
            renderItem={({ item: { title, cover } }) => (
              <Box style={{ marginLeft: OFFSET }}>
                <ReadingProgress {...{ title, cover }} />
              </Box>
            )}
            keyExtractor={({ id }) => id}
            horizontal
            showsHorizontalScrollIndicator={false}
            ListFooterComponent={() => <Box width={OFFSET} />}
            snapToOffsets={LIBRARY_BOOKS.map((_, index) => (index + 1) * (COVER_WIDTH + OFFSET))}
            decelerationRate={IS_ANDROID ? 0.9 : 'fast'}
          />
          <FlatList
            data={LIBRARY_BOOKS}
            renderItem={({ item: { title, cover, genre, rating, overview } }) => (
              <BookCard {...{ title, cover, genre, rating, overview }} />
            )}
            keyExtractor={({ id }) => id}
            ListHeaderComponent={
              <TouchableOpacity>
                <Box
                  flexDirection="row"
                  justifyContent="space-between"
                  alignItems="center"
                  px="l"
                  my="m"
                >
                  <Text variant="headline2">Top page turners</Text>
                  <IconChevronRight />
                </Box>
              </TouchableOpacity>
            }
            ItemSeparatorComponent={() => <Box height={OFFSET} />}
            ListFooterComponent={() => <Box height={TAB_BAR_HEIGHT + OFFSET * 2} />}
            showsVerticalScrollIndicator={false}
            decelerationRate={IS_ANDROID ? 0.9 : 'fast'}
          />
        </Box>
      </ScrollView>
    </Container>
  );
};

export default Home;

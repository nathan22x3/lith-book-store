/* eslint-disable react-native/no-inline-styles */
import { Box, Container, IconBell, IconChevronRight, Text, TextInput } from '@components/index';
import { StackScreenProps } from '@react-navigation/stack';
import { BookCard, COVER_WIDTH, ReadingProgress } from '@screens/Main/components';
import { DECELERATION_RATE, TAB_BAR_HEIGHT } from '@utils/const';
import { FlatList, ScrollView, TouchableOpacity } from 'react-native';
import { MainParams } from '.';
import { LIBRARY_BOOKS } from './mock';

const OFFSET = 20;

type HomeProps = StackScreenProps<MainParams>;

const Home = ({ navigation }: HomeProps) => {
  return (
    <Container px="none">
      <Box flexDirection="row" alignItems="center" px="l" my="m">
        <Box flex={1} mr="m">
          <TextInput
            icon="search"
            placeholder="Search..."
            containerStyle={{ mb: 'none' }}
            editable={false}
          />
        </Box>
        <TouchableOpacity>
          <IconBell />
        </TouchableOpacity>
      </Box>
      <ScrollView showsVerticalScrollIndicator={false}>
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
            ListFooterComponent={<Box width={OFFSET} />}
            snapToOffsets={LIBRARY_BOOKS.map((_, index) => (index + 1) * (COVER_WIDTH + OFFSET))}
            decelerationRate={DECELERATION_RATE}
          />
          <TouchableOpacity onPress={() => navigation.navigate('TopPageTurners')}>
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
          <Box>
            {LIBRARY_BOOKS.map(({ id, title, cover, genre, rating, overview }, index, list) => (
              <Box key={id} px="l">
                <BookCard {...{ title, cover, genre, rating, overview }} />
                <Box height={index === list.length - 1 ? TAB_BAR_HEIGHT + OFFSET * 2 : OFFSET} />
              </Box>
            ))}
          </Box>
        </Box>
      </ScrollView>
    </Container>
  );
};

export default Home;

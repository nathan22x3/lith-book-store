import {
  Box,
  Container,
  IconChevronLeft,
  IconFilter,
  IconSearch,
  Text,
  theme,
} from '@components/index';
import { StackScreenProps } from '@react-navigation/stack';
import { BookCard, BOOK_CARD_HEIGHT } from '@screens/Main/components';
import { DECELERATION_RATE, TAB_BAR_HEIGHT } from '@utils/const';
import { FlatList, FlatListProps, StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  interpolate,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useSharedValue,
} from 'react-native-reanimated';
import { MainParams } from '.';
import { LIBRARY_BOOKS } from './mock';

const ITEM_OFFSET = 20;
const SEARCH_BAR_OFFSET = 64;

const AnimatedFlatList =
  Animated.createAnimatedComponent<FlatListProps<typeof LIBRARY_BOOKS[0]>>(FlatList);

type TopPageTurnersProps = StackScreenProps<MainParams>;

const TopPageTurners = ({ navigation }: TopPageTurnersProps) => {
  const y = useSharedValue(0);

  const searchStyle = useAnimatedStyle(() => {
    const opacity = interpolate(y.value, [0, SEARCH_BAR_OFFSET], [0, 1]);
    return { opacity };
  });

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      y.value = contentOffset.y;
    },
  });

  return (
    <Container>
      <Box flexDirection="row" justifyContent="space-between" alignItems="center" py="m">
        <TouchableOpacity onPress={() => navigation.goBack()}>
          <IconChevronLeft />
        </TouchableOpacity>
        <Text variant="headline1">Top Page Turners</Text>
        <Animated.View style={searchStyle}>
          <TouchableOpacity>
            <IconSearch />
          </TouchableOpacity>
        </Animated.View>
      </Box>
      <AnimatedFlatList
        data={LIBRARY_BOOKS}
        renderItem={({ item: { title, cover, genre, rating, overview } }) => (
          <Box zIndex={-1}>
            <BookCard {...{ title, cover, genre, rating, overview }} />
          </Box>
        )}
        keyExtractor={({ id }) => id}
        scrollEventThrottle={16}
        contentContainerStyle={{ paddingBottom: TAB_BAR_HEIGHT + ITEM_OFFSET * 2 }}
        showsVerticalScrollIndicator={false}
        decelerationRate={DECELERATION_RATE}
        snapToOffsets={[
          SEARCH_BAR_OFFSET,
          ...LIBRARY_BOOKS.map(
            (_, index) => (BOOK_CARD_HEIGHT + ITEM_OFFSET) * (index + 1) + SEARCH_BAR_OFFSET
          ),
        ]}
        getItemLayout={(_, index) => ({
          index,
          length: BOOK_CARD_HEIGHT,
          offset: ITEM_OFFSET,
        })}
        ListHeaderComponent={
          <Box flexDirection="row" alignItems="center" mb="m" zIndex={1}>
            <TouchableOpacity style={styles.searchInput}>
              <IconSearch />
              <Text variant="body2" ml="s" color="neutral4">
                Search...
              </Text>
            </TouchableOpacity>
            <TouchableOpacity>
              <IconFilter />
            </TouchableOpacity>
          </Box>
        }
        ItemSeparatorComponent={() => <Box height={ITEM_OFFSET} />}
        {...{ onScroll }}
      />
    </Container>
  );
};

export default TopPageTurners;

const styles = StyleSheet.create({
  searchInput: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 48,
    paddingHorizontal: 16,
    borderRadius: 28,
    marginRight: 16,
    backgroundColor: theme.colors.neutral6,
  },
});

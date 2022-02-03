import { Box, Text } from '@components/index';
import { DEVICE_WIDTH } from '@utils/const';
import { numberWithCommas } from '@utils/number';
import _ from 'lodash';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { Book } from '../mock';
import RatingStars from './RatingStars';

const BOOK_CARD_RATIO = 116 / 84;
const BOOK_CARD_WIDTH = DEVICE_WIDTH * 0.224;
export const BOOK_CARD_HEIGHT = BOOK_CARD_WIDTH * BOOK_CARD_RATIO;

interface ReadingProgressProps
  extends Pick<Book, 'title' | 'cover' | 'genre' | 'rating' | 'overview'> {
  onPress?: () => void;
}

const ReadingProgress = ({
  title,
  cover,
  genre,
  rating,
  overview,
  onPress,
}: ReadingProgressProps) => {
  return (
    <TouchableOpacity activeOpacity={0.75} {...{ onPress }}>
      <Box flexDirection="row">
        <Image source={{ uri: cover }} style={styles.cover} />
        <Box flex={1} justifyContent="space-between" ml="m">
          <Box>
            <Text variant="body1">{title}</Text>
            <Text variant="body4" color="neutral4">
              {genre}
            </Text>
            <Box flexDirection="row" alignItems="center" mt="xs">
              <RatingStars star={rating.star} />
              <Text ml="xs" color="primary1">
                ({numberWithCommas(rating.count)})
              </Text>
            </Box>
          </Box>
          <Text variant="body4" color="neutral2">
            {_.truncate(overview, { length: 64 })}
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default ReadingProgress;

const styles = StyleSheet.create({
  cover: {
    width: BOOK_CARD_WIDTH,
    height: BOOK_CARD_HEIGHT,
    borderRadius: 12,
  },
});

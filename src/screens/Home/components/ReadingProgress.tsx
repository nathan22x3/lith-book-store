import { Box, Text } from '@components/index';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

const COVER_WIDTH = 178;
const COVER_HEIGHT = 245;

interface ReadingProgressProps {
  title: string;
  cover: string;
  onPress?: () => void;
}

const ReadingProgress = ({ title, cover, onPress }: ReadingProgressProps) => {
  // TODO: update with real progress
  const randomProgress = `${Math.round(Math.random() * 100)}%`;

  return (
    <TouchableOpacity activeOpacity={0.75} {...{ onPress }}>
      <Box width={COVER_WIDTH}>
        <Image source={{ uri: cover }} style={styles.cover} />
        <Text variant="body2" mt="xs">
          {title}
        </Text>
        <Box flexDirection="row" alignItems="center">
          <Box
            flex={1}
            overflow="hidden"
            flexDirection="row"
            height={4}
            borderRadius="xs"
            backgroundColor="neutral5"
            mr="s"
          >
            <Box width={randomProgress} borderRadius="xs" backgroundColor="primary1" />
          </Box>
          <Text variant="body3" color="neutral4">
            {randomProgress}
          </Text>
        </Box>
      </Box>
    </TouchableOpacity>
  );
};

export default ReadingProgress;

const styles = StyleSheet.create({
  cover: {
    width: COVER_WIDTH,
    height: COVER_HEIGHT,
    borderRadius: 20,
  },
});

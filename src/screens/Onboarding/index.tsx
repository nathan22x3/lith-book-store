import { Box, Text, theme } from '@components/index';
import { DEVICE_HEIGHT, DEVICE_WIDTH, IS_ANDROID } from '@utils/const';
import Constants from 'expo-constants';
import { useState } from 'react';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import Animated, {
  runOnJS,
  useAnimatedRef,
  useAnimatedScrollHandler,
  useAnimatedStyle,
  useDerivedValue,
  useSharedValue,
} from 'react-native-reanimated';
import Dot from './Dot';
import { ONBOARDING_DATA as data } from './mock';
import Slide from './Slide';

const Onboarding = () => {
  const x = useSharedValue(0);
  const sliderRef = useAnimatedRef<Animated.ScrollView>();
  const activeIndex = useDerivedValue(() => x.value / DEVICE_WIDTH);
  const [isLast, setIsLast] = useState(false);

  const subsilderStyle = useAnimatedStyle(() => {
    const translateX = -x.value;
    return { transform: [{ translateX }] };
  });

  const onScroll = useAnimatedScrollHandler({
    onScroll: ({ contentOffset }) => {
      x.value = contentOffset.x;
      if (contentOffset.x >= (data.length - 2) * DEVICE_WIDTH) runOnJS(setIsLast)(true);
      else runOnJS(setIsLast)(false);
    },
  });

  const onNext = () => {
    if (isLast) {
      // TODO: navigate to signup screen
      return;
    } else {
      sliderRef.current?.scrollTo({
        x: DEVICE_WIDTH * (activeIndex.value + 1),
        y: 0,
        animated: true,
      });
    }
  };

  const onSkip = () => {
    runOnJS(setIsLast)(true);
    sliderRef.current?.scrollTo({
      x: DEVICE_WIDTH * (data.length - 1),
      y: 0,
      animated: true,
    });
  };

  return (
    <Box
      height={DEVICE_HEIGHT + (IS_ANDROID ? Constants.statusBarHeight : 0)}
      backgroundColor="neutral6"
      pt="3xl"
    >
      <Box alignSelf="flex-end" mx="xl">
        <TouchableOpacity onPress={onSkip}>
          <Text variant="base" color={isLast ? 'transparent' : 'neutral2'}>
            Skip
          </Text>
        </TouchableOpacity>
      </Box>
      <Animated.ScrollView
        ref={sliderRef}
        style={styles.slider}
        horizontal
        bounces={false}
        snapToInterval={DEVICE_WIDTH}
        decelerationRate={IS_ANDROID ? 0.8 : 'fast'}
        showsHorizontalScrollIndicator={false}
        scrollEventThrottle={16}
        {...{ onScroll }}
      >
        {data.map(({ picture: { src, width, height } }, index) => (
          <Box key={index} width={DEVICE_WIDTH} alignItems="center">
            <Image source={src} style={{ width, height }} />
          </Box>
        ))}
      </Animated.ScrollView>
      <Animated.View style={[styles.subslider, subsilderStyle]}>
        {data.map(({ title, subtitle }, index) => {
          return (
            <Slide
              key={index}
              {...{
                title,
                subtitle,
                isLast: index === data.length - 1,
                onNext: () => onNext(),
              }}
            />
          );
        })}
      </Animated.View>
      <Box
        position="absolute"
        alignSelf="center"
        bottom={DEVICE_HEIGHT * 0.2}
        flexDirection="row"
        backgroundColor="transparent"
      >
        {data.map((_, index) => (
          <Dot key={index} {...{ index, activeIndex }} />
        ))}
      </Box>
    </Box>
  );
};

export default Onboarding;

const styles = StyleSheet.create({
  slider: {
    flex: 1,
    paddingTop: theme.spacing['2xl'],
    paddingBottom: theme.spacing['3xl'],
  },
  subslider: {
    flex: 1,
    flexDirection: 'row',
    width: DEVICE_WIDTH * data.length,
  },
});

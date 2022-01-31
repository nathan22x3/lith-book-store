import { theme } from '@components/index';
import React from 'react';
import { StyleSheet } from 'react-native';
import Animated, { interpolateColor, useAnimatedStyle } from 'react-native-reanimated';

interface DotProps {
  index: number;
  activeIndex: Animated.SharedValue<number>;
}

const Dot = ({ index, activeIndex }: DotProps) => {
  const style = useAnimatedStyle(() => {
    const backgroundColor = interpolateColor(
      activeIndex.value,
      [index - 1, index, index + 1],
      [theme.colors.neutral6, theme.colors.primary1, theme.colors.neutral6]
    );
    return { backgroundColor };
  });

  return <Animated.View style={[styles.container, style]} />;
};

Dot.defaultProps = {};

export default Dot;

const styles = StyleSheet.create({
  container: {
    width: 12,
    height: 12,
    borderRadius: 8,
    margin: 6,
    borderColor: theme.colors.primary1,
    borderWidth: 1,
  },
});

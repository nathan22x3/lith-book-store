import { Dimensions, Platform } from 'react-native';

export const { width: DEVICE_WIDTH, height: DEVICE_HEIGHT } = Dimensions.get('window');
export const IS_ANDROID = Platform.OS === 'android';
export const TAB_BAR_HEIGHT = 64;

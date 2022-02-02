import { theme } from '@components/index';
import { BottomTabBarButtonProps, createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '@screens/index';
import { ComponentType, ReactNode } from 'react';
import { StyleSheet, TouchableOpacity } from 'react-native';
import Animated, {
  interpolateColor,
  useAnimatedStyle,
  useDerivedValue,
  withTiming,
} from 'react-native-reanimated';
import { mix } from 'react-native-redash';
import {
  IconBook,
  IconBookFilled,
  IconBooks,
  IconBooksFilled,
  IconHome,
  IconHomeFilled,
  IconMore,
  IconMoreFilled,
} from './Icon';

export type StoreRoutes = {
  Home: undefined;
  Library: undefined;
  BookStore: undefined;
  Settings: undefined;
};

const Tab = createBottomTabNavigator<StoreRoutes>();

type TabItem = {
  route: keyof StoreRoutes;
  component: ComponentType<any>;
  activeIcon: ReactNode;
  inactiveIcon: ReactNode;
};

const tabs: TabItem[] = [
  { route: 'Home', component: Home, activeIcon: <IconHomeFilled />, inactiveIcon: <IconHome /> },
  { route: 'Library', component: Home, activeIcon: <IconBookFilled />, inactiveIcon: <IconBook /> },
  {
    route: 'BookStore',
    component: Home,
    activeIcon: <IconBooksFilled />,
    inactiveIcon: <IconBooks />,
  },
  {
    route: 'Settings',
    component: Home,
    activeIcon: <IconMoreFilled />,
    inactiveIcon: <IconMore />,
  },
];

const TabBarButton = ({
  activeIcon,
  inactiveIcon,
  accessibilityState,
  onPress,
}: Pick<TabItem, 'activeIcon' | 'inactiveIcon'> & BottomTabBarButtonProps) => {
  const selected = accessibilityState?.selected;
  const focused = useDerivedValue(() => withTiming(selected ? 1 : 0), [selected]);

  const style = useAnimatedStyle(() => {
    const bottom = mix(focused.value, 0, 16);
    const backgroundColor = interpolateColor(
      focused.value,
      [0, 1],
      [theme.colors.white, theme.colors.primary1]
    );

    return { bottom, backgroundColor };
  });

  return (
    <Animated.View style={[styles.tabBarButton, style]}>
      <TouchableOpacity activeOpacity={1} {...{ onPress }}>
        {selected ? activeIcon : inactiveIcon}
      </TouchableOpacity>
    </Animated.View>
  );
};

const StoreNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: styles.tabBar,
    }}
  >
    {tabs.map(({ route, component, activeIcon, inactiveIcon }) => (
      <Tab.Screen
        key={route}
        name={route}
        component={component}
        options={{
          tabBarButton: (props) => (
            <TabBarButton key={route} {...{ activeIcon, inactiveIcon }} {...props} />
          ),
        }}
      />
    ))}
  </Tab.Navigator>
);

export default StoreNavigator;

const styles = StyleSheet.create({
  tabBar: {
    position: 'absolute',
    alignItems: 'center',
    height: 64,
    borderTopLeftRadius: 28,
    borderTopRightRadius: 28,
    shadowColor: theme.colors.neutral1,
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 24,
    elevation: 5,
  },
  tabBarButton: {
    justifyContent: 'center',
    alignItems: 'center',
    width: 48,
    height: 56,
    borderRadius: 8,
    marginHorizontal: 20,
  },
});

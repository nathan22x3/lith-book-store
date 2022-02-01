import { Box } from '@components/Theme';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { Home } from '@screens/index';
import { IconHomeFilled } from './Icon';

export type StoreRoutes = {
  Home: undefined;
};

const Tab = createBottomTabNavigator<StoreRoutes>();

const StoreNavigator = () => (
  <Tab.Navigator
    screenOptions={{
      headerShown: false,
      tabBarShowLabel: false,
      tabBarStyle: {
        height: 70,
        borderTopLeftRadius: 28,
        borderTopRightRadius: 28,
      },
    }}
  >
    <Tab.Screen
      name="Home"
      component={Home}
      options={{
        tabBarIcon: () => {
          return (
            <Box
              justifyContent="center"
              alignItems="center"
              width={48}
              height={56}
              borderRadius="s"
              mb="2xl"
              backgroundColor="primary1"
            >
              <IconHomeFilled />
            </Box>
          );
        },
      }}
    />
  </Tab.Navigator>
);

export default StoreNavigator;

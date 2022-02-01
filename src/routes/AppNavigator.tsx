import { createStackNavigator } from '@react-navigation/stack';
import AuthNavigator from './AuthNavigator';
import StoreNavigator from './StoreNavigator';

export type AppRoutes = {
  Auth: undefined;
  Store: undefined;
};

const Stack = createStackNavigator<AppRoutes>();

const AppNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Auth" component={AuthNavigator} />
    <Stack.Screen name="Store" component={StoreNavigator} />
  </Stack.Navigator>
);

export default AppNavigator;

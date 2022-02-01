import { BottomTabNavigationProp } from '@react-navigation/bottom-tabs';
import { CompositeNavigationProp, RouteProp } from '@react-navigation/native';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';
import { Login, Onboarding, SignUp } from '@screens/index';
import { AppRoutes } from './AppNavigator';

export type AuthRoutes = {
  Onboarding: undefined;
  SignUp: undefined;
  Login: undefined;
};

export type AuthNavigationProps<RouteName extends keyof AuthRoutes> = {
  navigation: CompositeNavigationProp<
    StackNavigationProp<AuthRoutes, RouteName>,
    BottomTabNavigationProp<AppRoutes, 'Store'>
  >;
  route: RouteProp<AuthRoutes, RouteName>;
};

const Stack = createStackNavigator<AuthRoutes>();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Onboarding" component={Onboarding} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

export default AuthNavigator;

import { createStackNavigator } from '@react-navigation/stack';
import { Login, Onboarding, SignUp } from '@screens/index';

export type AuthStackParamList = {
  Onboarding: undefined;
  SignUp: undefined;
  Login: undefined;
};

const Stack = createStackNavigator<AuthStackParamList>();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Onboarding" component={Onboarding} />
    <Stack.Screen name="SignUp" component={SignUp} />
    <Stack.Screen name="Login" component={Login} />
  </Stack.Navigator>
);

export default AuthNavigator;

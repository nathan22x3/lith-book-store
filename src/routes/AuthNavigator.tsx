import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding, SignUp } from '@screens/index';

export type AuthParamList = {
  Onboarding: undefined;
  SignUp: undefined;
};

const Stack = createStackNavigator<AuthParamList>();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Onboarding" component={Onboarding} />
    <Stack.Screen name="SignUp" component={SignUp} />
  </Stack.Navigator>
);

export default AuthNavigator;

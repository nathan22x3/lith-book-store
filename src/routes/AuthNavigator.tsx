import { createStackNavigator } from '@react-navigation/stack';
import { Onboarding } from '@screens/index';

export type AuthParamList = {
  Onboarding: undefined;
};

const Stack = createStackNavigator<AuthParamList>();

const AuthNavigator = () => (
  <Stack.Navigator screenOptions={{ headerShown: false }}>
    <Stack.Screen name="Onboarding" component={Onboarding} />
  </Stack.Navigator>
);

export default AuthNavigator;

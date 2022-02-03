import { createStackNavigator } from '@react-navigation/stack';
import Home from './Home';
import TopPageTurners from './TopPageTurners';

export type MainParams = {
  Home: undefined;
  TopPageTurners: undefined;
};

const Stack = createStackNavigator<MainParams>();

const Main = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="TopPageTurners" component={TopPageTurners} />
    </Stack.Navigator>
  );
};

export default Main;

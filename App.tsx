import { LoadAssets, theme } from '@components/index';
import { createStackNavigator } from '@react-navigation/stack';
import { AuthNavigator } from '@routes/index';
import { ThemeProvider } from '@shopify/restyle';

const fonts = {
  'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  'Literata-Medium': require('./assets/fonts/Literata-Medium.ttf'),
};

type AppStackParamList = {
  Auth: undefined;
};

const Stack = createStackNavigator<AppStackParamList>();

const App = () => {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts }}>
        <Stack.Navigator screenOptions={{ headerShown: false }}>
          <Stack.Screen name="Auth" component={AuthNavigator} />
        </Stack.Navigator>
      </LoadAssets>
    </ThemeProvider>
  );
};

export default App;

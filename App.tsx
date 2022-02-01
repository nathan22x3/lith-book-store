import { LoadAssets, theme } from '@components/index';
import { AppNavigator } from '@routes/index';
import { ThemeProvider } from '@shopify/restyle';

const fonts = {
  'Roboto-Regular': require('./assets/fonts/Roboto-Regular.ttf'),
  'Roboto-Medium': require('./assets/fonts/Roboto-Medium.ttf'),
  'Roboto-Bold': require('./assets/fonts/Roboto-Bold.ttf'),
  'Literata-Medium': require('./assets/fonts/Literata-Medium.ttf'),
};

const App = () => {
  return (
    <ThemeProvider {...{ theme }}>
      <LoadAssets {...{ fonts }}>
        <AppNavigator />
      </LoadAssets>
    </ThemeProvider>
  );
};

export default App;

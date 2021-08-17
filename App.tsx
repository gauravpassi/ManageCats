import React from 'react';
import {Provider} from 'react-redux';
import {PersistGate} from 'redux-persist/integration/react';
import {persistor, store} from './src/redux/store';
import ThemeProvider from './src/utitles/theme/theme-provider';
import Welcome from './src/containers/Welcome';
import Dashboard from './src/containers/Dashboard';
import AddCat from './src/containers/AddCat';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

function AppNavigation() {
  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{headerShown: false}}>
        <Stack.Screen name="Welcome" component={Welcome} />
        <Stack.Screen name="Dashboard" component={Dashboard} />
        <Stack.Screen name="AddCat" component={AddCat} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const App = () => {
  return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
        <ThemeProvider>
          <AppNavigation />
        </ThemeProvider>
      </PersistGate>
    </Provider>
  );
};

export default App;

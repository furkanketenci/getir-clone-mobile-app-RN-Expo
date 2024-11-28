import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import AppNavigator from './src/navigators/AppNavigator';



export default function App() {
  return (
    <NavigationContainer >
      <View style={{ marginTop: 50 }}></View>
      <StatusBar style="auto" />
      <AppNavigator />
    </NavigationContainer>
  );
}

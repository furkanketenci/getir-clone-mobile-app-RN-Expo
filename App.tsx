import { StatusBar } from 'expo-status-bar';
import { View } from 'react-native';
import BottomNavigator from './src/navigators/BottomNavigator';
import { NavigationContainer } from '@react-navigation/native';



export default function App() {
  return (
    <NavigationContainer >
      <View style={{ marginTop: 50 }}></View>
      <StatusBar style="auto" />
      <BottomNavigator />
    </NavigationContainer>
  );
}

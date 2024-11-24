import { StatusBar } from 'expo-status-bar';
import { SafeAreaView, View } from 'react-native';
import HomeScreens from './src/screens/HomeScreens';
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

// getirColor:"#5D38BE";
// getirBG:"f5f5f5";
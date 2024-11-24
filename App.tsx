import { StatusBar } from 'expo-status-bar';
import { SafeAreaView } from 'react-native';
import HomeScreens from './src/screens/HomeScreens';



export default function App() {
  return (
    <SafeAreaView>
      <StatusBar style="dark" />
      <HomeScreens />
    </SafeAreaView>
  );
}

// getirColor:"#5D38BE";
// getirBG:"f5f5f5";
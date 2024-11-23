import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import HomeScreens from './src/screens/HomeScreens';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="dark" />
      <HomeScreens />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    marginTop: 60
  },
});

// getirColor:"#5D38BE";
// getirBG:"f5f5f5";
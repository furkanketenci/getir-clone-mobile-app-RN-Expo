import { NavigationContainer } from '@react-navigation/native';
import BottomTabsNavigator from './src/navigator/bottomNavigatorArea/BottomTabsNavigator';
import { SafeAreaView, StyleSheet } from 'react-native';

export default function App() {

  return (
    <SafeAreaView style={styles.container}>
      <NavigationContainer>
        <BottomTabsNavigator />
      </NavigationContainer>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
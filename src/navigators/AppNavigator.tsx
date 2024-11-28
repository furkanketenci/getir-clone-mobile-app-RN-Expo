import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigator from './BottomNavigator';
import CartScreen from '../screens/CartScreen';
import { Text, View } from 'react-native';
import StandartNavigator from './StandartNavigator';
import CartNavigator from './CartNavigator';

const Stack = createStackNavigator();

export default function AppNavigator() {
    return (
        <Stack.Navigator
            screenOptions={{
                headerShown: false,
            }}
        >
            <Stack.Screen name="Bottom" component={BottomNavigator} />
            <Stack.Screen name="Cart">

                {() => <CartNavigator />}
            </Stack.Screen>
        </Stack.Navigator>
    )
}
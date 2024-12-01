import { createStackNavigator } from '@react-navigation/stack';
import BottomNavigator from './BottomNavigator';
import { Image, View } from 'react-native';
import CartNavigator from './CartNavigator';
import CategoryDetailScreen from '../screens/CategoryDetailScreen';
import HeaderBackLeft from './partials/HeaderBackLeft';
import HeaderRightArea from './partials/HeaderRightArea';

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

            <Stack.Screen
                name='CategoryDetailScreen'
                component={CategoryDetailScreen}
                options={{
                    headerShown: true,
                    headerStyle: { backgroundColor: "#5D38BE" },
                    headerLeft: () => (
                        <HeaderBackLeft />
                    ),
                    headerTitle: () => (
                        <View>
                            {
                                <Image
                                    style={{ resizeMode: "center" }}
                                    source={require("../../assets/logo/logo.png")}
                                />
                            }

                        </View>
                    ),
                    headerRight: () => (
                        <HeaderRightArea />
                    )
                }}

            >
            </Stack.Screen>
        </Stack.Navigator>
    )
}
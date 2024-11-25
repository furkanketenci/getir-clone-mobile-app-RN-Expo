import { createStackNavigator } from '@react-navigation/stack';
import HomeScreens from '../../screens/HomeScreens';
import { Image, View } from 'react-native';

const Stack = createStackNavigator();

export default function HomeNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name="home"
                component={HomeScreens}
                options={{
                    headerStyle: { backgroundColor: "#5D38BE" },
                    headerTitle: () => (
                        <View>
                            <Image
                                style={{ resizeMode: "center" }}
                                source={require("../../../assets/logo/logo.png")}
                            />
                        </View>
                    )
                }}
            />
        </Stack.Navigator>
    )
}
import { createStackNavigator } from '@react-navigation/stack';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import CartScreen from '../screens/CartScreen';
import { AntDesign, Feather } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

export default function CartNavigator() {
    const navigation = useNavigation();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={"CartDefault"}
                component={CartScreen}
                options={{
                    headerStyle: { backgroundColor: "#5D38BE" },
                    headerLeft: () => (
                        <TouchableOpacity onPress={() => {
                            navigation.goBack();
                        }}>
                            <View style={{ marginLeft: 12 }}>
                                <AntDesign name="close" size={19} color="white" />
                            </View>
                        </TouchableOpacity>
                    ),
                    headerTitle: () => (
                        <View>
                            <Text style={styles.textTitle}>Sepetim</Text>

                        </View>
                    ),
                    headerRight: () => (
                        <TouchableOpacity>
                            <View style={styles.headerRightWrapper}>
                                <AntDesign name="delete" size={19} color="#fff" />
                            </View>
                        </TouchableOpacity>
                    )
                }}
            />
        </Stack.Navigator>
    )
}


const styles = StyleSheet.create({
    headerRightWrapper: {
        paddingRight: 12,
    },
    textTitle: {
        fontSize: 16,
        color: "#fff",
        fontWeight: 600
    }
})


import { Feather, Ionicons } from '@expo/vector-icons';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
const Stack = createStackNavigator();

interface IStandartNavigator {
    name: string;
    component: React.ComponentType<any>;
    logo?: boolean;
    textTitle?: string;
}

export default function StandartNavigator({
    name,
    component,
    logo,
    textTitle
}: IStandartNavigator) {
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={name}
                component={component}
                options={{
                    headerStyle: { backgroundColor: "#5D38BE" },
                    headerLeft: () => (
                        <TouchableOpacity >
                            <View style={{ marginLeft: 12 }}>
                                <Ionicons name="chevron-back" size={19} color="white" />
                            </View>
                        </TouchableOpacity>
                    ),
                    headerTitle: () => (
                        <View>
                            {
                                logo ? <Image
                                    style={{ resizeMode: "center" }}
                                    source={require("../../assets/logo/logo.png")}
                                /> : <Text>{textTitle}</Text>
                            }

                        </View>
                    ),
                    headerRight: () => (
                        <TouchableOpacity>
                            <View style={styles.headerRightWrapper}>
                                <Feather name="shopping-bag" size={19} color="#fff" />
                                <Text style={styles.cost}>{"\u20BA"}555</Text>
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
        flexDirection: "row",
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        marginRight: 12,
        paddingRight: 10,
        paddingLeft: 10,
        borderColor: "#fff",
        borderWidth: 1,
        borderStyle: "solid",
        borderRadius: 50,
        padding: 5

    },
    cost: {
        marginLeft: 2,
        color: "#fff",
        fontWeight: 500

    }
})

function useNavigation() {
    throw new Error('Function not implemented.');
}

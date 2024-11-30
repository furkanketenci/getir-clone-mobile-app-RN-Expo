import { createStackNavigator } from '@react-navigation/stack';
import { Image, StyleSheet, Text, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import HeaderBackLeft from './partials/HeaderBackLeft';
import HeaderRightArea from './partials/HeaderRightArea';
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
    const navigation = useNavigation();
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={name}
                component={component}
                options={{
                    headerStyle: { backgroundColor: "#5D38BE" },
                    headerLeft: () => (
                        <HeaderBackLeft />
                    ),
                    headerTitle: () => (
                        <View>
                            {
                                logo ? <Image
                                    style={{ resizeMode: "center" }}
                                    source={require("../../assets/logo/logo.png")}
                                /> : <Text style={styles.textTitle}>{textTitle}</Text>
                            }

                        </View>
                    ),
                    headerRight: () => (
                        <HeaderRightArea />
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

    },
    textTitle: {
        fontSize: 16,
        color: "#fff",
        fontWeight: 600
    }
})


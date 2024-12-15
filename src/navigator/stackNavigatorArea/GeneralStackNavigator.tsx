import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import Colors from '../../../constants/Colors';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Entypo, Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

const Stack = createStackNavigator();

interface IGeneralStackNavigator {
    componentName: React.ComponentType;
    name: string;

}

export default function GeneralStackNavigator({
    componentName,
    name
}: IGeneralStackNavigator) {
    const navigation = useNavigation()
    return (
        <Stack.Navigator>
            <Stack.Screen
                name={name}
                component={componentName}
                options={{
                    headerStyle: {
                        backgroundColor: Colors.getirColor,
                        height: 65

                    },
                    headerTitle: (() => (
                        <View>
                            <Image
                                style={styles.logo}
                                source={require("../../../assets/logo/logo.png")}
                            />
                        </View>
                    )),
                    headerLeft: (() => (
                        <TouchableOpacity onPress={() => navigation.goBack()}>
                            <Entypo style={styles.backIcon} name="chevron-left" size={22} color="#fff" />
                        </TouchableOpacity>
                    )),
                    headerRight: (() => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Cart")}
                            style={styles.rightAreaContainer}>
                            <Ionicons style={styles.bagIcon} name="bag-handle-sharp" size={22} color="#fff" />
                            <Text style={styles.amount}>{"\u20BA"}1928</Text>
                        </TouchableOpacity>
                    )),
                }}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 65,
        height: 65,
        resizeMode: "contain",
    },
    backIcon: {
        marginLeft: 8
    },
    rightAreaContainer: {
        flexDirection: "row",
        alignItems: "center",
        marginRight: 8,
        backgroundColor: Colors.getirYellow,
        padding: 5
    },
    bagIcon: {
        marginRight: 5,
        color: Colors.getirColor,
    },
    amount: {
        color: Colors.getirColor,
        fontWeight: 600
    }
})
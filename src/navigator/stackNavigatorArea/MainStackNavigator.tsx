import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabsNavigator from '../bottomNavigatorArea/BottomTabsNavigator';
import CartScreen from '../../../screens/cart/CartScreen';
import { AntDesign, Entypo, Ionicons } from '@expo/vector-icons';
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Colors from '../../../constants/Colors';
import CategoryDetailScreen from '../../../screens/category/CategoryDetailScreen';

const Stack = createStackNavigator();

export default function MainStackNavigator() {
    const navigation = useNavigation();
    return (
        <Stack.Navigator>
            <Stack.Screen
                options={{
                    headerShown: false,
                }}
                name="BottomTabs" component={BottomTabsNavigator} />
            <Stack.Screen
                name="Cart"
                component={CartScreen}
                options={{
                    title: "Sepetim",
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: Colors.getirColor,
                        height: 60,
                    },
                    headerLeft: () => (
                        <TouchableOpacity
                            style={styles.closeIcon}
                            onPress={() => navigation.goBack()}
                        >
                            <AntDesign name="close" size={20} color="#fff" />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity style={styles.deleteIcon}>
                            <AntDesign name="delete" size={20} color="#fff" />
                        </TouchableOpacity>
                    ),
                }}
            />
            <Stack.Screen
                name='CategoryDetail'
                component={CategoryDetailScreen}
                options={{
                    title: "Sepetim",
                    headerTintColor: 'white',
                    headerStyle: {
                        backgroundColor: Colors.getirColor,
                        height: 60,
                    },
                    headerTitle: (() => (
                        <View>
                            <Image
                                style={styles.logo}
                                source={require("../../../assets/logo/logo.png")}
                            />
                        </View>
                    )),
                    headerLeft: () => (
                        <TouchableOpacity
                            style={styles.closeIcon}
                            onPress={() => navigation.goBack()}
                        >
                            <Entypo name="chevron-left" size={20} color="#fff" />
                        </TouchableOpacity>
                    ),
                    headerRight: () => (
                        <TouchableOpacity
                            onPress={() => navigation.navigate("Cart")}
                            style={styles.rightAreaContainer}>
                            <Ionicons style={styles.bagIcon} name="bag-handle-sharp" size={22} color="#fff" />
                            <Text style={styles.amount}>{"\u20BA"}1928</Text>
                        </TouchableOpacity>
                    ),
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
    closeIcon: {
        marginLeft: 12
    },
    deleteIcon: {
        marginRight: 12
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
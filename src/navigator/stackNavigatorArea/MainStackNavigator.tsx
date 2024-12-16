import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import BottomTabsNavigator from '../bottomNavigatorArea/BottomTabsNavigator';
import CartScreen from '../../../screens/cart/CartScreen';
import { AntDesign } from '@expo/vector-icons';
import { StyleSheet, TouchableOpacity } from 'react-native';
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
            <Stack.Screen name='CategoryDetail' component={CategoryDetailScreen} />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    closeIcon: {
        marginLeft: 12
    },
    deleteIcon: {
        marginRight: 12
    },

})
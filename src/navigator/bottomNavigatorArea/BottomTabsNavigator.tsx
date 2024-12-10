import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomepageScreen from '../../../screens/bottomTabsScreens/HomepageScreen';
import SearchScreen from '../../../screens/bottomTabsScreens/SearchScreen';
import ProfileScreen from '../../../screens/bottomTabsScreens/ProfileScreen';
import GiftScreen from '../../../screens/bottomTabsScreens/GiftScreen';
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';

export default function BottomTabsNavigator() {
    const Tab = createBottomTabNavigator();
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: Colors.getirColor,
                tabBarInactiveTintColor: Colors.gray,
                tabBarShowLabel: false
            }}

        >
            <Tab.Screen
                options={{
                    tabBarIcon: (({
                        focused
                    }) => {
                        return (
                            <Entypo name="home" size={24} color={focused ? Colors.getirColor : Colors.gray} />
                        )
                    }),
                }}
                name="Home"
                component={HomepageScreen}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: (({ focused }) => {
                        return (
                            <Feather name="search" size={24} color={focused ? Colors.getirColor : Colors.gray} />
                        )
                    })
                }}
                name="Search"
                component={SearchScreen}
            />
            <Tab.Screen
                options={{
                    tabBarIcon: (({ focused }) => {
                        return (
                            <AntDesign name="user" size={24} color={focused ? Colors.getirColor : Colors.gray} />
                        )
                    })
                }}
                name="Profile"
                component={ProfileScreen}
            />
            <Tab.Screen
                name="Gift"
                component={GiftScreen}
                options={{
                    tabBarIcon: (({ focused }) => {
                        return (
                            <AntDesign name="gift" size={24} color={focused ? Colors.getirColor : Colors.gray} />
                        )
                    })
                }}
            />
        </Tab.Navigator>
    )
}

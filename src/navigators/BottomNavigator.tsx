import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import HomeScreens from '../screens/HomeScreens';
import SearchScreen from '../screens/SearchScreen';
import ProfileScreen from '../screens/ProfileScreen';
import GiftScreen from '../screens/GiftScreen';
import { Entypo, Feather, FontAwesome } from '@expo/vector-icons';
import HomeNavigator from './header/HomeNavigator';
import StandartNavigator from './StandartNavigator';

const Tab = createBottomTabNavigator();

export default function BottomNavigator() {
    return (
        <Tab.Navigator
            screenOptions={{
                headerShown: false,
                tabBarActiveTintColor: "#5D38BE",
                tabBarInactiveTintColor: "gray",
            }}
        >
            <Tab.Screen
                name="Home"
                component={HomeNavigator}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Entypo name="home" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="search"
                // component={SearchScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="search" size={24} color={color} />
                    ),
                }}
            >
                {() => <StandartNavigator component={SearchScreen} name='search' logo />}
            </Tab.Screen>

            <Tab.Screen
                name="Profile"
                component={ProfileScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" size={24} color={color} />
                    ),
                }}
            />
            <Tab.Screen
                name="Gift"
                component={GiftScreen}
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="gift" size={24} color={color} />
                    ),
                }}
            />
        </Tab.Navigator>
    )
}
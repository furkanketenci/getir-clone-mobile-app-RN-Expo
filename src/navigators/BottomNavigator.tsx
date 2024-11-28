import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
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
                name="Search"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="search" size={24} color={color} />
                    ),
                }}
            >
                {() => <StandartNavigator component={SearchScreen} name='search' textTitle='Search' />}
            </Tab.Screen>

            <Tab.Screen
                name="Profile"
                options={{
                    tabBarIcon: ({ color }) => (
                        <FontAwesome name="user" size={24} color={color} />
                    ),
                }}
            >
                {() => <StandartNavigator component={ProfileScreen} name='profile' textTitle='Profile' />}
            </Tab.Screen>
            <Tab.Screen
                name="Gift"
                options={{
                    tabBarIcon: ({ color }) => (
                        <Feather name="gift" size={24} color={color} />
                    ),
                }}
            >
                {() => <StandartNavigator component={GiftScreen} name='gift' textTitle='Gift' />}
            </Tab.Screen>
        </Tab.Navigator>
    )
}
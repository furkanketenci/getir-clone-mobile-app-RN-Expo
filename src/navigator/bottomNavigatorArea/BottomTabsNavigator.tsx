import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import SearchScreen from '../../../screens/bottomTabsScreens/SearchScreen';
import ProfileScreen from '../../../screens/bottomTabsScreens/ProfileScreen';
import GiftScreen from '../../../screens/bottomTabsScreens/GiftScreen';
import { AntDesign, Entypo, Feather } from '@expo/vector-icons';
import Colors from '../../../constants/Colors';
import HomepageStackNavigator from '../stackNavigatorArea/HomepageStackNavigator';
import GeneralStackNavigator from '../stackNavigatorArea/GeneralStackNavigator';

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
                component={HomepageStackNavigator}
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
            >
                {
                    () =>
                        <GeneralStackNavigator
                            componentName={SearchScreen}
                            name='Search'
                        />
                }
            </Tab.Screen>
            <Tab.Screen
                options={{
                    tabBarIcon: (({ focused }) => {
                        return (
                            <AntDesign name="user" size={24} color={focused ? Colors.getirColor : Colors.gray} />
                        )
                    })
                }}
                name="Profile"
            >
                {
                    () =>
                        <GeneralStackNavigator
                            componentName={ProfileScreen}
                            name='Profile'
                        />
                }
            </Tab.Screen>
            <Tab.Screen
                name="Gift"
                options={{
                    tabBarIcon: (({ focused }) => {
                        return (
                            <AntDesign name="gift" size={24} color={focused ? Colors.getirColor : Colors.gray} />
                        )
                    })
                }}
            >
                {
                    () =>
                        <GeneralStackNavigator
                            componentName={GiftScreen}
                            name='Gift'
                        />
                }
            </Tab.Screen>
        </Tab.Navigator>
    )
}

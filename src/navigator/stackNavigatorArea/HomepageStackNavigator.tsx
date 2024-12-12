import { View, Image, StyleSheet } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import HomepageScreen from '../../../screens/bottomTabsScreens/HomepageScreen';
import Colors from '../../../constants/Colors';

const Stack = createStackNavigator();

export default function HomepageStackNavigator() {
    return (
        <Stack.Navigator>
            <Stack.Screen
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
                    ))
                }}
                name="Home"
                component={HomepageScreen}
            />
        </Stack.Navigator>
    )
}

const styles = StyleSheet.create({
    logo: {
        width: 65,
        height: 65,
        resizeMode: "contain",

    }
})
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'
import { Feather } from '@expo/vector-icons'
import { useNavigation } from '@react-navigation/native';

export default function HeaderRightArea() {

    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => { navigation.navigate('Cart') }} >
            <View style={styles.headerRightWrapper}>
                <Feather name="shopping-bag" size={19} color="#fff" />
                <Text style={styles.cost}>{"\u20BA"}555</Text>
            </View>
        </TouchableOpacity>
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
})


import { StyleSheet, View, Text, Image } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'

export default function HeaderTopArea() {
    return (
        <View style={styles.headerTopAreaContainer}>
            <View style={styles.firstArea}>
                <Image
                    style={styles.houseImg}
                    source={require("../../../assets/house.png")}
                />
                <View style={styles.aboutLocation}>
                    <Text style={styles.locationName}>Ev</Text>
                    <Text style={styles.locAdress}>Maltepe / İstanbul</Text>
                </View>
                <Entypo style={{ marginLeft: "auto" }} name="chevron-right" size={22} color="#5d3ebd" />
            </View>
            <View style={styles.secondArea}>
                <Text style={styles.tvsText}>TVS</Text>
                <Text style={styles.tvsDesc}>15dk</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    headerTopAreaContainer: {
        flexDirection: "row",
        alignItems: "center",
        backgroundColor: "#facc15",
        justifyContent: "space-between",
        height: 48,
    },
    firstArea: {
        width: "85%",
        backgroundColor: "#fff",
        height: 48,
        flexDirection: "row",
        alignItems: "center",
        borderTopRightRadius: 100,
        borderBottomRightRadius: 100,
        padding: 16
    },
    aboutLocation: {
        flexDirection: "row",
        alignItems: "center",
        textAlign: "center",
        marginLeft: 5,
        height: 40
    },
    locationName: {
        marginRight: 5,
        fontSize: 16,
        fontWeight: 700
    },
    locAdress: {
        fontSize: 14,
        fontWeight: 300
    },
    secondArea: {
        width: "15%",
        textAlign: "center",
        alignItems: "center"
    },
    tvsText: {
        fontSize: 13,
        color: "#5D38BE",
        fontWeight: 500,
        marginBottom: 2
    },
    tvsDesc: {
        fontSize: 14,
        color: "#5D38BE",
        fontWeight: 700
    },
    houseImg: {
        width: 24,
        height: 24
    },
})
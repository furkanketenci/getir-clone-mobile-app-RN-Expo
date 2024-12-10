import { View, Text, Image, StyleSheet } from 'react-native'
import React from 'react'
import { Entypo } from '@expo/vector-icons'

export default function HomepageHeader() {
    return (
        <View style={styles.homepageHeaderContainer}>
            <View style={styles.homepageWrapper}>
                <View style={styles.homepageLeftArea}>
                    <View style={styles.homepageTextArea}>
                        <Image
                            style={styles.houseImage}
                            source={require("../../../assets/house.png")}
                        />
                        <Text style={styles.locationName}>EV</Text>
                        <Text style={styles.address}>Kurupelit Mahallesi Atakum / Samsun</Text>
                    </View>
                    <Entypo name="chevron-small-right" size={18} color="#5D38BE" />
                </View>
                <View style={styles.estArrivalTimeWrapper}>
                    <Text style={styles.arrivalTimeText}>TVS</Text>
                    <Text style={styles.arrivalTimeMin}>15dk</Text>
                </View>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    homepageHeaderContainer: {
        paddingLeft: 15,
        backgroundColor: "#fff",
    },
    homepageWrapper: {
        flexDirection: "row",
        alignItems: "center",
        height: 42
    },
    homepageLeftArea: {
        flexDirection: "row",
        alignItems: "center",
        width: "85%"
    },
    homepageTextArea: {
        flexDirection: "row",
        alignItems: "center",
        flex: 1
    },
    houseImage: {
        width: 25,
        height: 25
    },
    locationName: {
        marginLeft: 6
    },
    address: {
        fontSize: 10,
        marginLeft: 3,
    },
    estArrivalTimeWrapper: {
        backgroundColor: "#facc15",
        color: "#5D38BE",
        width: "15%",
        justifyContent: "center",
        textAlign: "center",
        alignItems: "center",
        height: "100%"
    },
    arrivalTimeText: {
        fontSize: 11,
        color: "#5D38BE",
        fontWeight: 500,
    },
    arrivalTimeMin: {
        fontSize: 15,
        color: "#5D38BE",
        fontWeight: 500,
    }
})
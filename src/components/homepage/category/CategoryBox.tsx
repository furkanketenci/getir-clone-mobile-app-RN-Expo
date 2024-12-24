import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { ICategoryData } from './HomepageCategoryBox'

export default function CategoryBox({ item, params }: { item: ICategoryData, params: any }) {
    const routeID = params.categoryData.id;
    const activeBoxID = item.id;
    const findedActiveCategoryBox = routeID === activeBoxID;
    return (
        <TouchableOpacity style={findedActiveCategoryBox ? styles.activeFilterBox : styles.categoryBox}>
            <Text style={styles.categoryTitle}>{item.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryBox: {
        paddingHorizontal: 10,
    },
    categoryTitle: {
        color: "white",
        fontWeight: "500",
        fontSize: 12
    },
    activeFilterBox: {
        color: "#fff",
        backgroundColor: "#0c0c0c",
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 80,
    }
})
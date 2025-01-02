import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'
import { ICategoryData } from '../categoryHomepage/HomepageCategoryBox'
import Colors from '../../../../../constants/Colors';

export default function CategoryBox({ item, activeCategoryBox, selectedTopFilterFunc }: { item: ICategoryData; activeCategoryBox: boolean; selectedTopFilterFunc: (selectedCategory: ICategoryData) => void; }) {

    return (
        <TouchableOpacity onPress={() => { selectedTopFilterFunc(item) }} style={activeCategoryBox ? styles.activeFilterBox : styles.categoryBox}>
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
        backgroundColor: Colors.getirColor,
        height: "100%",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: 95,
    }
})
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { ICtgItem } from '../../../types/categoryItemTypes'

export default function CategoryBox({
    categoriesData,
    activeCategory,
    onPress
}:
    {
        categoriesData: ICtgItem,
        activeCategory: any
        onPress: any

    }) {
    return (
        <TouchableOpacity onPress={onPress} style={
            activeCategory && styles.selectedContainer
        }>
            <Text style={styles.ctgTitles}>{categoriesData.title}</Text>
        </TouchableOpacity>
    )
}


const styles = StyleSheet.create({
    ctgTitles: {
        color: "#fff",
        fontWeight: 400,
        fontSize: 12,
        marginHorizontal: 12,
        paddingVertical: 16
    },
    selectedContainer: {
        backgroundColor: "#000",
    },
})
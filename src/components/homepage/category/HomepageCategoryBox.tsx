import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'

const { width } = Dimensions.get("window");

interface ICategoryData {
    id: number,
    imageUrl: number,
    title: string
}

export default function HomepageCategoryBox({ categoryData }: { categoryData: ICategoryData }) {
    return (
        <TouchableOpacity style={styles.categoryArea} key={categoryData.id}>
            <Image style={styles.categoryImage} source={categoryData.imageUrl} />
            <Text style={styles.categoryTitle}>{categoryData.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryArea: {
        width: width / 4,
        alignItems: "center",
        paddingVertical: 12
    },
    categoryImage: {
        width: 50,
        height: 50
    },
    categoryTitle: {
        fontSize: 11,
        paddingTop: 5
    }
})
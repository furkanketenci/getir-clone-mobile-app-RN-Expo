import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'
import { categoriesData } from '../../data/categoryData'

export default function CategoryList() {
    return (
        <>
            <View style={styles.categoryListContainer}>
                {
                    categoriesData.map((item, index) => {
                        return (
                            <CategoryItem key={index} ctgItem={item} />
                        )
                    })
                }
            </View>
        </>
    )
}

const styles = StyleSheet.create({
    categoryListContainer: {
        flexDirection: "row",
        flexWrap: "wrap"
    }
})
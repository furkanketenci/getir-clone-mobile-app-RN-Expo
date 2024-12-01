import { StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { categoryImagesData } from '../../data/categoryData'
import CategoryBox from './CategoryBox'

export default function CategoryFilter() {
    const [selectedCategory, setSelectedCategory] = useState<number>();

    return (
        <ScrollView
            style={styles.ctgFilterContainer}
            horizontal
        >
            {
                categoryImagesData.map((ctgItem) => (
                    <CategoryBox
                        key={ctgItem.id}
                        categoriesData={ctgItem}
                        activeCategory={selectedCategory === ctgItem.id}
                        onPress={() => setSelectedCategory(ctgItem.id)}

                    />
                ))
            }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    ctgFilterContainer: {
        backgroundColor: "#7849F7",
    },
    ctgTitles: {
        color: "#fff",
        fontWeight: 400,
        fontSize: 12
    }
})
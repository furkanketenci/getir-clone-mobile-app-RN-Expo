import { StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import CategoryBox from './CategoryBox'
import { categoriesData } from '../../data/categoryData';

export default function CategoryFilter() {
    const [selectedCategory, setSelectedCategory] = useState<number>();

    return (
        <ScrollView
            style={styles.ctgFilterContainer}
            horizontal
        >
            {
                categoriesData.map((ctgItem) => (
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
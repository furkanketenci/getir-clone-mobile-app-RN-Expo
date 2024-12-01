import { StyleSheet, ScrollView } from 'react-native'
import React, { useState } from 'react'
import { categoriesData } from '../../data/categoryData'
import CategorySubBox from './CategorySubBox'

export default function CategorySubFilter() {

    const [selectedCtgSubFilter, setSelectedCtgSubFilter] = useState<any>();

    return (
        <ScrollView
            style={styles.ctgSubFilterContainer}
            contentContainerStyle={
                {
                    alignItems: "center",
                    justifyContent: "space-around",
                    width: "100%"
                }
            }
            horizontal
        >
            {categoriesData.map((item) => item.subCategory?.map((subCtg) => (
                <CategorySubBox
                    ctgSubBoxData={subCtg}
                    activeSubCtg={selectedCtgSubFilter === subCtg.id}
                    onPress={() => setSelectedCtgSubFilter(subCtg.id)}
                />
            )))}
        </ScrollView>

    )
}

const styles = StyleSheet.create({
    ctgSubFilterContainer: {
        backgroundColor: "#FBFBFB",
        paddingTop: 3
    }
})
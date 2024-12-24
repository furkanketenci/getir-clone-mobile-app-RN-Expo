import { Text, StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import Colors from '../../../../constants/Colors'
import { categoriesData } from '../../../../data/categoryData'
import CategoryBox from './CategoryBox'

export default function CategoryFilterbox({ paramsInfo }: { paramsInfo: any }) {
    return (
        <FlatList
            style={styles.ctgFilterBoxContainer}
            data={categoriesData}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({ item }) => (
                < View style={styles.categoryBoxArea}>
                    <CategoryBox params={paramsInfo} item={item} />
                </View>
            )
            }
        >
        </FlatList >
    )
}

const styles = StyleSheet.create({
    ctgFilterBoxContainer: {
        backgroundColor: Colors.GetirColor2nd,
        height: 45,
    },
    categoryBoxArea: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
    }
})
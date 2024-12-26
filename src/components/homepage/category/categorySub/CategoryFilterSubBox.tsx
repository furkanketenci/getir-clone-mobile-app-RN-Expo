import React from 'react'
import { FlatList, StyleSheet, View } from 'react-native'
import { categoriesData } from '../../../../../data/categoryData'
import { ICategoryData } from '../categoryHomepage/HomepageCategoryBox'
import CategorySubBox from './CategorySubBox'
import Colors from '../../../../../constants/Colors'

export default function CategoryFilterSubBox({ paramsInfo }: { paramsInfo: ICategoryData }) {
    return (
        <FlatList
            style={styles.ctgFilterSubboxContainer}
            horizontal
            data={categoriesData.filter((subCtg: any) => subCtg.topId === paramsInfo.id)}
            renderItem={({ item }) => (
                <View style={styles.categoryBoxArea}>
                    <CategorySubBox categoryData={item} />
                </View>
            )}
        >
        </ FlatList>
    )
}



const styles = StyleSheet.create({
    ctgFilterSubboxContainer: {
        backgroundColor: "#fff",
        height: 45,
    },
    categoryBoxArea: {
        display: "flex",
        alignItems: "flex-start",
        justifyContent: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 1,
        },
        shadowOpacity: 0.22,
        shadowRadius: 2.22,

        elevation: 3,
    }
})
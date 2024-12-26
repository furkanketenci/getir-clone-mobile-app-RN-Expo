import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import { categoriesData } from '../../../../../data/categoryData'
import Colors from '../../../../../constants/Colors'
import CategoryBox from './CategoryBox'
import { ICategoryData } from '../categoryHomepage/HomepageCategoryBox'

export default function CategoryTopFilterBox({ paramsInfo }: { paramsInfo: ICategoryData }) {
    return (
        <FlatList
            style={styles.ctgFilterBoxContainer}
            data={categoriesData}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({ item }) => (
                <View style={styles.categoryBoxArea}>
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
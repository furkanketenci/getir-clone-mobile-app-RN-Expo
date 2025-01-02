import { StyleSheet, FlatList, View } from 'react-native'
import React from 'react'
import { categoriesData } from '../../../../../data/categoryData'
import Colors from '../../../../../constants/Colors'
import CategoryBox from './CategoryBox'
import { ICategoryData } from '../categoryHomepage/HomepageCategoryBox'

export default function CategoryTopFilterBox({ aboutSelectedFilterData, selectedTopFilterFunc }: { aboutSelectedFilterData: ICategoryData; selectedTopFilterFunc: any }) {
    return (
        <FlatList
            style={styles.ctgFilterBoxContainer}
            data={categoriesData.filter((item) => item.topId === 0)}
            showsHorizontalScrollIndicator={false}
            horizontal={true}
            renderItem={({ item }) => {
                const id = item.id;
                const selectedId = aboutSelectedFilterData.id;
                const activeTopCategory = id === selectedId;
                return (
                    <View style={styles.categoryBoxArea}>
                        <CategoryBox
                            selectedTopFilterFunc={selectedTopFilterFunc}
                            activeCategoryBox={activeTopCategory}
                            item={item}
                        />
                    </View>
                )
            }}
            extraData={aboutSelectedFilterData.id}
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
import { View, StyleSheet } from 'react-native'
import React from 'react'
import { categoriesData } from '../../../../../data/categoryData';
import HomepageCategoryBox from './HomepageCategoryBox';

export default function HomepageCategoryArea() {
    return (
        <View style={styles.homepageCtgContainer}>
            {
                categoriesData.map((ctg) => (
                    <HomepageCategoryBox key={ctg.id} categoryData={ctg} />
                ))
            }
        </View>
    )
}

const styles = StyleSheet.create({
    homepageCtgContainer: {
        flexDirection: "row",
        flexWrap: "wrap",
    }
})
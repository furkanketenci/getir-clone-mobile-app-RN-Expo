import { ScrollView, StyleSheet } from 'react-native'
import React from 'react'
import HomepageHeader from '../../src/components/homepage/HomepageHeader'
import HomepageSlider from '../../src/components/homepage/HomepageSlider'
import HomepageCategoryArea from '../../src/components/homepage/category/HomepageCategoryArea'

export default function HomepageScreen() {
    return (
        <ScrollView style={styles.homepageScreenContainer}>
            <HomepageHeader />
            <HomepageSlider />
            <HomepageCategoryArea />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    homepageScreenContainer: {
        backgroundColor: "#fff"
    }

})
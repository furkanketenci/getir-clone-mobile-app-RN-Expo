import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import HeaderMain from '../components/home/HeaderMain'
import SliderCarousel from '../components/home/SliderCarousel'
import CategoryList from '../components/home/CategoryList'

export default function HomeScreens() {
    return (
        <ScrollView style={styles.homeScreensContainer}>
            <HeaderMain />
            <SliderCarousel />
            <CategoryList />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    homeScreensContainer: {
        height: "100%",
        backgroundColor: "f5f5f5"
    }
})
import { StyleSheet, ScrollView } from 'react-native'
import React from 'react'
import HeaderMain from '../components/home/HeaderMain'
import SliderCarousel from '../components/home/SliderCarousel'

export default function HomeScreens() {
    return (
        <ScrollView style={styles.homeScreensContainer}>
            <HeaderMain />
            <SliderCarousel />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    homeScreensContainer: {
        height: "100%",
        backgroundColor: "f5f5f5"
    }
})
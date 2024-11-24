import { StyleSheet, ScrollView, View } from 'react-native'
import React from 'react'
import HeaderTopArea from '../components/home/HeaderTopArea'
import SliderCarousel from '../components/home/SliderCarousel'
import CategoryList from '../components/home/CategoryList'

export default function HomeScreens() {
    return (
        <>
            <View>
                <HeaderTopArea />
            </View>
            <ScrollView style={styles.homeScreensContainer}>
                <SliderCarousel />
                <CategoryList />
            </ScrollView>
        </>
    )
}

const styles = StyleSheet.create({
    homeScreensContainer: {
        height: "100%",
        backgroundColor: "f5f5f5"
    }
})
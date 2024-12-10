import { Dimensions, Image, ScrollView, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const { width } = Dimensions.get("window");
export default function HomepageSlider() {

    return (
        <ScrollView
            horizontal
            pagingEnabled
            showsHorizontalScrollIndicator={false}
        >
            <Image style={styles.images} source={require("../../../assets/sliderPhotos/firstSliderPhoto.jpg")} />
            <Image style={styles.images} source={require("../../../assets/sliderPhotos/secondSliderPhoto.jpg")} />
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    images: {
        resizeMode: "cover",
        width: width,
        height: 200,

    }
})
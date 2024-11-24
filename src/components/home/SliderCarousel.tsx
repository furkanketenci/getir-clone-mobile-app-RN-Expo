import { View, Text, FlatList, Image, Dimensions, StyleSheet } from 'react-native'
import React from 'react'

const sliderImagesDataPaths = [
    require('../../../assets/sliderPhotos/firstSliderPhoto.jpg'),
    require('../../../assets/sliderPhotos/secondSliderPhoto.jpg')
]

const { width } = Dimensions.get('window');

export default function SliderCarousel() {
    const renderSliderImagesFunc = ({ item }: { item: number }) => {
        return (
            <Image style={styles.sliderImage} source={item} />
        )
    }
    return (
        <View>
            <FlatList
                data={sliderImagesDataPaths}
                renderItem={renderSliderImagesFunc}
                horizontal
                showsHorizontalScrollIndicator={false}
                pagingEnabled={true}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    sliderImage: {
        width: width,
        resizeMode: "cover",
        height: 200,
    }
})
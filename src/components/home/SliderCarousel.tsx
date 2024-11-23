import React from 'react';
import { View, FlatList, Image, Dimensions, StyleSheet } from 'react-native';

const { width } = Dimensions.get('window'); // Ekran genişliğini alıyoruz

const images = [
    require('../../../assets/2.jpg'),
    require('../../../assets/4.jpg'),
];

const SliderCarousel = () => {
    return (
        <View style={styles.container}>
            <FlatList
                data={images}
                horizontal // Yatay kaydırma
                renderItem={({ item }) => (
                    <Image source={item} style={styles.image} />
                )}
                keyExtractor={(item, index) => index.toString()}
                showsHorizontalScrollIndicator={false} // Yatay scroll bar'ı gizle
                pagingEnabled // Sayfa başına kaydırma
            />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        width: '100%',
        height: 200, // Slider yüksekliği
        overflow: 'hidden', // Taşan içeriği gizle
    },
    image: {
        width: width, // Ekran genişliği kadar resim genişliği
        height: 200, // Yükseklik, container'a uyacak şekilde
        resizeMode: 'cover', // Resimleri kesmeden sığdır
    },
});

export default SliderCarousel;

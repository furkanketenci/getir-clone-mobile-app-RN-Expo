import { Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const { width } = Dimensions.get("window");

export interface ICategoryData {
    id: number,
    imageUrl?: number,
    title: string,
    topId?: number
}

export default function HomepageCategoryBox({ categoryData }: { categoryData: ICategoryData }) {

    const navigation = useNavigation();

    const pressedCategoryRedirectFunc = () => {
        navigation.navigate("CategoryDetail", { categoryData: categoryData })
    }
    // categoryData verisini alıp, onPress ile CategoryDetailScreen.tsx screen'e gönderiyoruz.
    // CategoryDetailScreen.tsx içerisinde de route ile yakalıyoruz.
    // Bu kısım önemli!
    return (
        <TouchableOpacity onPress={pressedCategoryRedirectFunc} style={styles.categoryArea} key={categoryData.id}>
            <Image style={styles.categoryImage} source={categoryData.imageUrl} />
            <Text style={styles.categoryTitle}>{categoryData.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    categoryArea: {
        width: width / 4,
        alignItems: "center",
        paddingVertical: 12
    },
    categoryImage: {
        width: 50,
        height: 50
    },
    categoryTitle: {
        fontSize: 11,
        paddingTop: 5
    }
})
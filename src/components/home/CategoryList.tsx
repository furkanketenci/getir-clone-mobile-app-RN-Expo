import { StyleSheet, View } from 'react-native'
import React from 'react'
import CategoryItem from './CategoryItem'

export default function CategoryList() {

    const categoryImagesData = [
        {
            imageUrl: require("../../../assets/categories/1.png"),
            title: "İndirim"
        },
        {
            imageUrl: require("../../../assets/categories/2.png"),
            title: "Su & İçecek"
        },
        {
            imageUrl: require("../../../assets/categories/3.png"),
            title: "Meyve & Sebze"
        },
        {
            imageUrl: require("../../../assets/categories/4.png"),
            title: "Fırından"
        },
        {
            imageUrl: require("../../../assets/categories/5.png"),
            title: "Temel Gıda"
        },
        {
            imageUrl: require("../../../assets/categories/6.png"),
            title: "Atıştırmalık"
        },
        {
            imageUrl: require("../../../assets/categories/7.png"),
            title: "Dondurma"
        },
        {
            imageUrl: require("../../../assets/categories/8.png"),
            title: "Süt Ürünleri"
        },
        {
            imageUrl: require("../../../assets/categories/9.png"),
            title: "Kahvaltılık"
        },
        {
            imageUrl: require("../../../assets/categories/10.png"),
            title: "Yiyecek"
        },
        {
            imageUrl: require("../../../assets/categories/11.png"),
            title: "Fit & Form"
        },
        {
            imageUrl: require("../../../assets/categories/12.png"),
            title: "Kişisel Bakım"
        },
        {
            imageUrl: require("../../../assets/categories/13.png"),
            title: "Evcil Hayvan"
        },
        {
            imageUrl: require("../../../assets/categories/14.png"),
            title: "Bebek"
        },
        {
            imageUrl: require("../../../assets/categories/15.png"),
            title: "Cinsel Sağlık"
        },
        {
            imageUrl: require("../../../assets/categories/16.png"),
            title: "Ev Bakım"
        },
        {
            imageUrl: require("../../../assets/categories/17.png"),
            title: "Teknoloji"
        },
        {
            imageUrl: require("../../../assets/categories/18.png"),
            title: "Ev & Yaşam"
        },

    ]
    return (
        <View style={styles.categoryListContainer}>
            {
                categoryImagesData.map((item, index) => {
                    return (
                        <CategoryItem key={index} url={item.imageUrl} title={item.title} />
                    )
                })
            }
        </View>
    )
}

const styles = StyleSheet.create({
    categoryListContainer: {
        flexDirection: "row",
        flexWrap: "wrap"
    }
})
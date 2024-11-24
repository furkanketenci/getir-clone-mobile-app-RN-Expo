import { TouchableOpacity, Image, StyleSheet, Dimensions, Text } from 'react-native'
import React from 'react'

export default function CategoryItem({ url, title }: { url: number, title: string }) {
    return (
        <TouchableOpacity style={styles.ctgItemContainer}>
            <Image style={styles.categoryImage} source={url} />
            <Text style={styles.categoryName}>{title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    ctgItemContainer: {
        width: Dimensions.get('window').width / 4,
        alignItems: "center",
        justifyContent: "center",
        marginVertical: 5,
    },
    categoryImage: {
        width: 50,
        height: 50
    },
    categoryName: {
        fontSize: 12,
        marginTop: 5,
        alignItems: "center",
        justifyContent: "center",
    }
})
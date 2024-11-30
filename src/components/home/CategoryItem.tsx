import { TouchableOpacity, Image, StyleSheet, Dimensions, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

export interface ICtgItem {
    imageUrl: number;
    title: string;
}

export default function CategoryItem({ ctgItem }: { ctgItem: ICtgItem }) {

    const navigation = useNavigation();

    const triggerOnPressFunc = () => {
        navigation.navigate('CategoryDetailScreen', { ctgItem })
    }

    return (
        <TouchableOpacity onPress={triggerOnPressFunc} style={styles.ctgItemContainer}>
            <Image style={styles.categoryImage} source={ctgItem.imageUrl} />
            <Text style={styles.categoryName}>{ctgItem.title}</Text>
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
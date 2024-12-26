import { Text, StyleSheet, TouchableOpacity } from 'react-native'
import React, { useState } from 'react'
import { ICategoryData } from '../categoryHomepage/HomepageCategoryBox'

export default function CategorySubBox({ categoryData }: { categoryData: ICategoryData }) {

    const [isSelectedCtgSubBox, setIsSelectedCtgSubBox] = useState(false);


    const handlePress = () => {
        setIsSelectedCtgSubBox(!isSelectedCtgSubBox)
    }
    return (
        <TouchableOpacity onPress={handlePress} >
            <Text style={[styles.subBoxTitle, isSelectedCtgSubBox && styles.selectedSubBoxView]}>{categoryData.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    subBoxTitle: {
        fontSize: 12,
        paddingHorizontal: 15,
    },
    selectedSubBoxView: {
        borderWidth: 1,
        borderColor: 'black',
        paddingVertical: 5,
        marginHorizontal: 7,

    }
})
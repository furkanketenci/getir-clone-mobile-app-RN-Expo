import { Text, TouchableOpacity, StyleSheet } from 'react-native'
import React from 'react'


export default function CategorySubBox({ ctgSubBoxData, activeSubCtg, onPress }: { ctgSubBoxData: any, activeSubCtg: any, onPress: any }) {
    return (
        <TouchableOpacity
            onPress={onPress}
            style={[
                activeSubCtg && styles.activeSubCtgStyle
            ]}
        >
            <Text style={styles.subCategoryTitle} >{ctgSubBoxData.title}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    subCategoryTitle: {
        paddingVertical: 8,
        fontWeight: 400,
        fontSize: 12,
        color: "#000",

    },
    activeSubCtgStyle: {
        borderWidth: 1,
        borderColor: "#7849F7",
        borderStyle: 'solid',
        paddingHorizontal: 12,
    }
})
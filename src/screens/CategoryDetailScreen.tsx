import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { ICtgItem } from '../components/home/CategoryItem';

export default function CategoryDetailScreen() {
    const route = useRoute();
    const params = route.params as { ctgItem: ICtgItem }

    return (
        <View>
            <Text>{params.ctgItem.title}</Text>
        </View>
    )
}
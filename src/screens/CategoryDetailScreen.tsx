import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import CategoryFilter from '../components/home/CategoryFilter';
import { ICtgItem } from '../../types/categoryItemTypes';

export default function CategoryDetailScreen() {
    const route = useRoute();
    const params = route.params as { ctgItem: ICtgItem }

    return (
        <View>
            <CategoryFilter />
            <Text>{params.ctgItem.title}</Text>
        </View>
    )
}
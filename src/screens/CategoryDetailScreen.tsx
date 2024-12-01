import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import CategoryFilter from '../components/home/CategoryFilter';
import { ICtgItem } from '../../types/categoryItemTypes';
import CategorySubFilter from '../components/home/CategorySubFilter';

export default function CategoryDetailScreen() {
    const route = useRoute();
    const params = route.params as { ctgItem: ICtgItem }

    return (
        <View>
            <CategoryFilter />
            <CategorySubFilter />
            <Text>{params.ctgItem.title}</Text>
        </View>
    )
}
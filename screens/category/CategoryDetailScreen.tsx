import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { ICategoryData } from '../../src/components/homepage/category/HomepageCategoryBox';

export default function CategoryDetailScreen() {
    const route = useRoute();
    const params = route.params as { categoryData: ICategoryData }
    return (
        <View>
            <Text>{params.categoryData.title}</Text>
        </View>
    )
}
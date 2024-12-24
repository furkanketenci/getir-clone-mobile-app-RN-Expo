import { View, Text } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { ICategoryData } from '../../src/components/homepage/category/HomepageCategoryBox';
import CategoryFilterbox from '../../src/components/homepage/category/CategoryFilterbox';

export default function CategoryDetailScreen() {
    const route = useRoute();
    const params = route.params as { categoryData: ICategoryData }
    return (
        <View>
            <CategoryFilterbox paramsInfo={params} />
            <Text>{params.categoryData.title}</Text>
        </View>
    )
}
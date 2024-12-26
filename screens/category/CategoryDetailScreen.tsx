import { Text, View } from 'react-native'
import React from 'react'
import { useRoute } from '@react-navigation/native';
import { ICategoryData } from '../../src/components/homepage/category/categoryHomepage/HomepageCategoryBox';
import CategoryTopFilterBox from '../../src/components/homepage/category/categoryTop/CategoryTopFilterBox';
import CategoryFilterSubBox from '../../src/components/homepage/category/categorySub/CategoryFilterSubBox';
import { categoriesData } from '../../data/categoryData';

export default function CategoryDetailScreen() {
    const route = useRoute();
    const params = route.params as { categoryData: ICategoryData }

    return (
        <View>
            <CategoryTopFilterBox paramsInfo={params.categoryData} />
            <CategoryFilterSubBox paramsInfo={params.categoryData} />
            <Text>{params.categoryData.title}</Text>
        </View>
    )
}
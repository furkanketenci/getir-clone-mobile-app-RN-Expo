import { Text, View } from 'react-native'
import React, { useState } from 'react'
import { useRoute } from '@react-navigation/native';
import { ICategoryData } from '../../src/components/homepage/category/categoryHomepage/HomepageCategoryBox';
import CategoryTopFilterBox from '../../src/components/homepage/category/categoryTop/CategoryTopFilterBox';
import CategoryFilterSubBox from '../../src/components/homepage/category/categorySub/CategoryFilterSubBox';
import { categoriesData } from '../../data/categoryData';

export default function CategoryDetailScreen() {
    const route = useRoute();
    const params = route.params as { categoryData: ICategoryData }
    const selectedIdInfo = params.categoryData

    const [selectedTopFilterCategory, setSelectedTopFilterCategory] = useState<ICategoryData>(selectedIdInfo);

    const handleSelectedTopFilterCtg = (selectedId: ICategoryData) => {
        const selectedCategory = categoriesData.find((item) => item.id === selectedId.id);
        if (selectedCategory) {
            setSelectedTopFilterCategory(selectedCategory);
        }
    }
    return (
        <View>
            <CategoryTopFilterBox selectedTopFilterFunc={handleSelectedTopFilterCtg} aboutSelectedFilterData={selectedTopFilterCategory} />
            <CategoryFilterSubBox paramsInfo={params.categoryData} />
        </View>
    )
}
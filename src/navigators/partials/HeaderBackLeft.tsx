import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import { useNavigation } from '@react-navigation/native';

export default function HeaderBackLeft() {
    const navigation = useNavigation();
    return (
        <TouchableOpacity onPress={() => {
            navigation.goBack();
        }}>
            <View style={{ marginLeft: 12 }}>
                <Ionicons name="chevron-back" size={19} color="white" />
            </View>
        </TouchableOpacity>
    )
}
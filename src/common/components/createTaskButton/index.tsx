import React from "react";
import { FAB } from 'react-native-paper';
import {createTaskButtonStyle} from "./createTaskButton.style";
import {useNavigation} from "@react-navigation/native";

export const CreateTaskButton = () => {
    const navigation = useNavigation();
    return (
        <FAB
            icon="plus"
            style={createTaskButtonStyle.fab}
            onPress={() => {navigation.navigate('CreateTask')}}
        />
    )
}

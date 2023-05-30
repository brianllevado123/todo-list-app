import React from "react";
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {createStackNavigator} from "@react-navigation/stack";
import {NavigationContainer, useNavigation, useRoute} from "@react-navigation/native";
import {HomeScreen} from "../screens/home";
import {TaskCompletedScreen} from "../screens/taskCompleted";
import {TaskCancelledScreen} from "../screens/taskCancelled";
import {CreateTaskButton} from "../common/components/createTaskButton";
import {CreateTaskScreen} from "../screens/createTask";

export const AppNavigator = () => {
    const Tab = createMaterialTopTabNavigator();
    const Stack = createStackNavigator();

    const HomeTab = () => {
        return (
            <Tab.Navigator initialRouteName={HomeScreen}>
                <Tab.Screen name="All" component={HomeScreen}></Tab.Screen>
                <Tab.Screen name="Completed" component={TaskCompletedScreen}></Tab.Screen>
                <Tab.Screen name="Cancelled" component={TaskCancelledScreen}></Tab.Screen>
            </Tab.Navigator>
        )
    }

    return(
        <NavigationContainer>
            <Stack.Navigator initialRouteName={HomeTab}>
                <Stack.Screen name="todoList" component={HomeTab}></Stack.Screen>
                <Stack.Screen name="CreateTask" component={CreateTaskScreen}></Stack.Screen>
            </Stack.Navigator>
            <CreateTaskButton />
        </NavigationContainer>
    )
}

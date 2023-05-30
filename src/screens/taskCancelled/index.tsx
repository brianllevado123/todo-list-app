import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Card, Text} from "react-native-paper";
import auth from "@react-native-firebase/auth";
import {useDispatch} from "react-redux";
import {logoutError, logoutSuccess} from "../../reducers/userSession.reducer";

export const TaskCancelledScreen = () => {
    const dispatch = useDispatch();
    const signOut = () => {
        try {
            auth().signOut()
            dispatch(logoutSuccess());
        } catch (error) {
            dispatch(logoutError(error));
        }
    }

    return (
        <SafeAreaView>
            <Card>
                <Card.Content>
                    <Text>
                        --Cancelled task--
                    </Text>
                    {/*<Button onPress={signOut} mode="contained">Logout</Button>*/}
                </Card.Content>
            </Card>
        </SafeAreaView>
    )
}

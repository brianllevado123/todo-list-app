import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Button, Card, Text} from "react-native-paper";
import auth from "@react-native-firebase/auth";
import {useDispatch, useSelector} from "react-redux";
import {logoutError, logoutSuccess} from "../../reducers/userSession.reducer";

export const HomeScreen = () => {
    const {user} = useSelector((state) => state.userSession)
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
                        Hi {user}!
                        --All task--
                    </Text>

                    <Button onPress={signOut} mode="contained">Logout</Button>
                </Card.Content>
            </Card>
        </SafeAreaView>
    )
}

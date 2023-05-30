import React from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Card, Text} from "react-native-paper";

export const CreateTaskScreen = () => {
    return (
        <SafeAreaView>
            <Card>
                <Card.Content>
                    <Text>
                        --Create task--
                        {/*https://www.youtube.com/watch?v=BJDsYDSP8T8*/}
                    </Text>
                </Card.Content>
            </Card>
        </SafeAreaView>
    )
}

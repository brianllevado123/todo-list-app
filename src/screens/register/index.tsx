import React, {useState} from "react";
import {SafeAreaView} from "react-native-safe-area-context";
import {Button, Card, TextInput} from "react-native-paper";
import {useForm, Controller} from "react-hook-form";
import {CustomInput} from "../../common/components/customInput";
import {userSignUpHook} from "../../common/hooks/userSignUp.hook";
import {useNavigation} from "@react-navigation/native";
import {useDispatch} from "react-redux";

export const RegisterScreen = () => {
    const {control, handleSubmit, formState: {errors}} = useForm();
    const dispatch = useDispatch();
    const navigation = useNavigation();

    const signUp = async (data) => {
        await userSignUpHook(data, navigation, dispatch);
    }

    return (
        <SafeAreaView>
            <Card>
                <Card.Title title="Register" />
                <Card.Content>
                    <CustomInput control={control}
                                 name="email"
                                 label="Email"
                                 secureTextEntry={false}
                                 rules={{required: 'Email is required', pattern: {value: /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w\w+)+$/, message: 'Invalid email format'} }}
                    />
                    <CustomInput control={control}
                                 name="password"
                                 label="Password"
                                 secureTextEntry={true}
                                 rules={{required: 'Password is required', minLength: {value: 6, message: "Minimum password length is 6 characters"}}}
                    />
                    <Button onPress={handleSubmit(signUp)}
                            mode="contained">
                        Submit
                    </Button>
            </Card.Content>
        </Card>
</SafeAreaView>
)
}

import React from "react";
import {View} from "react-native";
import {Controller} from "react-hook-form";
import {Text, TextInput} from "react-native-paper";

export const CustomInput = ({control, name, label, secureTextEntry, rules = {}}) => {
    return (
        <Controller control={control}
            name={name}
            rules={rules}
            render={({field: {value, onChange, onBlur}, fieldState: {error}}) => (
                <>
                    <TextInput label={label}
                               value={value}
                               onChangeText={onChange}
                               onBlur={onBlur}
                               secureTextEntry={secureTextEntry}
                               mode='outlined'
                               error={error ? true : false}
                    />
                    {error && (
                        <Text style={{color: 'red'}}>{error.message || 'Error'}</Text>
                    )}

                </>
            )}
        />
    )
}

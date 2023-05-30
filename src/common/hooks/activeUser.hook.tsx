import React, { useState, useEffect } from "react";
import auth from "@react-native-firebase/auth";
import {useDispatch} from "react-redux";

export const useActiveUser = () => {
    const [user, setUser] = useState(null);
    const dispatch = useDispatch();
    useEffect(() => {
        const unsubscribe = auth().onAuthStateChanged((authenticatedUser) => {
            if (authenticatedUser) {
                setUser(authenticatedUser.uid);
            } else {
                setUser(null);
            }
        });

        return () => unsubscribe();
    }, []);

    return user;
};

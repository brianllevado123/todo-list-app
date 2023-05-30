import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    user: null,
    error: null
}

export const userSessionSlice = createSlice({
    name: 'userSession',
    initialState,
    reducers: {
        loginSuccess: (state, action) => {
            state.user = action.payload;
            state.error = null;
        },
        loginError: (state, action) => {
            state.user = null;
            state.error = action.payload;
        },
        logoutSuccess: (state) => {
            state.user = null;
            state.error = null;
        },
        logoutError: (state, action) => {
            state.error = action.payload;
        },
    },
})

// Action creators are generated for each case reducer function
export const { loginSuccess, loginError, logoutSuccess, logoutError } = userSessionSlice.actions

export default userSessionSlice.reducer

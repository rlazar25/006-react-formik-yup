import { createSlice } from "@reduxjs/toolkit";

const userSlice = createSlice({
    name: 'user',
    initialState: {
        user: {}
    },
    reducers: {
        registerUserAction: (state, action) => {
            console.log(action.payload);
            state.user = action.payload;
            localStorage.setItem('user_shop', JSON.stringify(action.payload));
        },
        restoreUserAction: (state, action) => {
            state.user = action.payload;
        },
        removeUserAction: (state, action) => {
            state.user = {};
            localStorage.removeItem('user_shop');
        }
    } 
})

export const {registerUserAction, restoreUserAction, removeUserAction} = userSlice.actions;
export default userSlice.reducer;
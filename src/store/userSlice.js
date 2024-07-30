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
        }
    } 
})

export const {registerUserAction} = userSlice.actions;
export default userSlice.reducer;
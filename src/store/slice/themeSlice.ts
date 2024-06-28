import { createSlice } from "@reduxjs/toolkit";


export interface ThemeState {
    isItDarkTheme: boolean;
}

const initialState: ThemeState = {
    isItDarkTheme: false,
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.isItDarkTheme = !state.isItDarkTheme;
        },
    },
});

export const { changeTheme } = themeSlice.actions;
export default themeSlice.reducer;
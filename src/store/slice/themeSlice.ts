import type { SectionName } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
    isItDarkTheme: boolean;
    activeSection: SectionName;
    lastTimeClicked: number;
}

const initialState: ThemeState = {
    isItDarkTheme: false,
    activeSection: "Home",
    lastTimeClicked: 0,
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state) => {
            state.isItDarkTheme = !state.isItDarkTheme;
        },
        changeActiveSection: (state, action: PayloadAction<SectionName>) => {
            state.activeSection = action.payload;
        },
        updateLastTimeClicked: (state, action: PayloadAction<number>) => {
            state.lastTimeClicked = action.payload;
        }
    },
});

export const { changeTheme, changeActiveSection, updateLastTimeClicked } = themeSlice.actions;
export default themeSlice.reducer;
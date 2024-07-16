import type { SectionName } from "@/types/types";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ThemeState {
    isItDarkTheme: boolean;
    themeColor: string
    activeSection: SectionName;
    lastTimeClicked: number;
}

const initialState: ThemeState = {
    isItDarkTheme: false,
    themeColor: "light",
    activeSection: "Home",
    lastTimeClicked: 0,
};

export const themeSlice = createSlice({
    name: "theme",
    initialState,
    reducers: {
        changeTheme: (state, action) => {
            state.isItDarkTheme = action?.payload==='dark' ? true : false;

            state.themeColor = action.payload;

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
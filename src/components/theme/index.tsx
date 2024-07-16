"use client";
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { changeTheme } from '@/store/slice/themeSlice';
import React, { useCallback, useEffect } from 'react';
import { BsMoonStars, BsSun } from 'react-icons/bs';

type Props = {};

const ThemeSwitchButton = (props: Props) => {
    const { isItDarkTheme, themeColor } = useAppSelector((store) => store?.theme);
    const dispatch = useAppDispatch();

    const toggleTheme = () => {
        const newThemeColor = isItDarkTheme && themeColor === "dark" ? "light" : "dark";

       
        window.localStorage.setItem("themeColor", newThemeColor);

        if (newThemeColor === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

       
        dispatch(changeTheme(newThemeColor));
    };

    const handleThemeChange = useCallback(() => {
       
        const storedThemeColor = localStorage.getItem("themeColor");
        const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

       
        const initialThemeColor = storedThemeColor || (prefersDark ? "dark" : "light");

       
        if (initialThemeColor === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }

        dispatch(changeTheme(initialThemeColor));
    }, [dispatch]);

    useEffect(() => {
        handleThemeChange();
    }, [handleThemeChange]);

    return (
        <button
            onClick={toggleTheme}
            className={`fixed bottom-5 right-10 size-[3rem] shadow-xl bg-white rounded-full flex justify-center items-center group`}>
            {
                isItDarkTheme && themeColor === "dark" ?
                    (<BsSun className={`text-2xl text-black`} />)
                    :
                    (<BsMoonStars className={`text-2xl text-black`} />)
            }
        </button>
    );
}

export default ThemeSwitchButton;

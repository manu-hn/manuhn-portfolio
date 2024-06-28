'use client'
import { changeTheme } from '@/store/slice/themeSlice';
import { useAppDispatch, useAppSelector } from '@/store/store';
import React from 'react';



type Props = {}

const AboutSection = (props: Props) => {
    const dispatch = useAppDispatch();
    const isItDarkTheme = useAppSelector((store)=>store.theme.isItDarkTheme)
    function themeChangeHandler() {
        dispatch(changeTheme())
    }
    return (
        <div>
            <button className={`px-8 py-2 ${isItDarkTheme ? " text-red-500 bg-blue-800" : "text-black-500 bg-green-800"}`} onClick={themeChangeHandler}>Change theme</button>
        </div>
    )
}

export default AboutSection
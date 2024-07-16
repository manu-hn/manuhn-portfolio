"use client";
import { SnackbarProvider } from 'notistack';
import React from 'react'

type NoticeProps = {
    children: React.ReactNode;
}

const NotistackProvider = ({ children, }: NoticeProps) => {
    return (
        <SnackbarProvider iconVariant={{
            success: '✅',
            error: '✖️',
            warning: '⚠️',
            info: 'ℹ️',
        }}>{children}</SnackbarProvider>
    )
}

export default NotistackProvider;
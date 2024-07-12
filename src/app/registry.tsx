"use client";

import { useServerInsertedHTML } from "next/navigation";
import React, { useState } from "react";
import {
    ServerStyleSheet,
    StyleSheetManager,
    ThemeProvider,
} from "styled-components";
import { colors } from '@/app/assets/style'

export default function StyledComponentsRegistry({ children }: Readonly<{
    children: React.ReactNode;
}>) {
    const [styledComponentsStyleSheet] = useState(() => new ServerStyleSheet());

    const theme = {

        colors
    };
    useServerInsertedHTML(() => {
        const styles = styledComponentsStyleSheet.getStyleElement();
        styledComponentsStyleSheet.instance.clearTag();
        return <>{styles}</>;
    });

    if (typeof window !== "undefined") return <>{children}</>;

    return (
        <>
            <ThemeProvider theme={theme}>
                <StyleSheetManager sheet={styledComponentsStyleSheet.instance}>
                    {children}
                </StyleSheetManager>
            </ThemeProvider>
        </>
    );
}

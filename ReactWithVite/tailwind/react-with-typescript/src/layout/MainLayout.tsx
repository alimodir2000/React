import { Box } from '@mantine/core';
import React from 'react'


interface MainLayoutProps {
    children: React.ReactNode;
}


const MainLayout = ({ children }: MainLayoutProps) => {
    return (
        <Box
            mih={"100vh"}
            display={"flex"}
            style={{
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                padding: "20px"
            }}

        >{children}</Box>
    )
}

export default MainLayout;


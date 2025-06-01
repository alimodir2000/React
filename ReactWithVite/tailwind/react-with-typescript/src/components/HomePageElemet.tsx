import React from 'react'
import { Flex, Text } from '@mantine/core'

interface HomePageElemetProps {
    icon?: React.ReactNode;
    title?: string;
};


const HomePageElemet = ({ icon, title }: HomePageElemetProps) => {
    return (
        <Flex
            mx={"lg"}
            justify="stretch"
            align="center"
            direction="column"
            style={{ height: '100%' }}>
            {icon}
            <Text
                variant="text"
                size="xl"
                fw={"bold"}
                mb="md">
                {title}
            </Text>

        </Flex>
    )
}

export default HomePageElemet
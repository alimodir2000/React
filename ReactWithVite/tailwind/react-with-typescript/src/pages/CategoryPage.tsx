import CategoryItem from '../components/CategoryItem'
import QuizContainer from '../components/QuizContainer'
import { Grid, Text } from '@mantine/core'

import { BiBrain } from "react-icons/bi";
import { IoEarth } from "react-icons/io5";



const CategoryPage = () => {

    const categories = [
        {
            id: 1,
            name: 'General Knowledge',
            description: 'Test your general knowledge across various topics.',
            icon: <BiBrain color='red' size={70} />,
       
        },
        {
            id: 2,
            name: 'Geography',
            description: 'Explore the wonders of science and technology.',
            icon: <IoEarth color='green' size={70} />,
       
        },
        {
            id: 3,
            name: 'History',
            description: 'Dive into the past and learn about historical events.',
           icon: <BiBrain color='yellow' size={70} />,
       
        },
    ];

    return (
        <QuizContainer>
            <Text size="xl" weight={700} mb="md">
                Select a Category
            </Text>
            <Grid miw="90%" justify="center" align="center" gap="md">
                {
                    categories.map((category, index)     => (
                        <Grid.Col key={index} span={4}>
                            <CategoryItem
                                active={false}
                                icon={category.icon}
                                title={category.name}
                                onClick={() => console.log(`${category.name} clicked!`)}
                            />
                        </Grid.Col>
                    ))
                }
            </Grid>           
        </QuizContainer>
    )
}

export default CategoryPage
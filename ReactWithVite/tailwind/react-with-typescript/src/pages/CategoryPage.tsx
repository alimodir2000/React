import CategoryItem from '../components/CategoryItem'
import QuizContainer from '../components/QuizContainer'
import { Button, Grid, Text } from '@mantine/core'

import { BiBrain } from "react-icons/bi";
import { IoEarth, IoEarthOutline } from "react-icons/io5";
import { FaFilm } from "react-icons/fa";
import { GiMaterialsScience } from "react-icons/gi";
import { GrTechnology } from "react-icons/gr";
import { IoCodeSlashSharp } from "react-icons/io5";


import { useNavigate } from 'react-router';
import useQuizStore, { type QuizCategory } from '../store/quiz-store';
import { useState } from 'react';


import { technologies } from '../data/technologies';
import { geography } from '../data/geography';
import { movies } from '../data/movies';
import { programming } from '../data/programming';
import { science } from '../data/science';
import { generalKnowledge } from '../data/generalKnowledge'

const quizData: Record<string, QuizCategory> = {
    "General Knowledge": generalKnowledge,
    "Geography": geography,
    "Science": science,
    "Movies": movies,
    "Technologies": technologies,
    "programming": programming,
};




const CategoryPage = () => {
    const navigate = useNavigate();
    
    const { setQuizData, quizData:data } = useQuizStore();

    const navigateToQuiz = () => {
        navigate('/quiz-start');
    }

    const handleStartQuiz = () =>{
        navigateToQuiz();
    }

    console.log(data);


    const categories = [
        {
            icon: <BiBrain color="#1F509A" size={70} />,
            title: "General Knowledge",
        },
        {
            icon: <IoEarthOutline color="#15B392" size={70} />,
            title: "Geography",
        },

        {
            icon: <GiMaterialsScience color="#6C48C5" size={70} />,
            title: "Science",
        },
        {
            icon: <FaFilm color="#3B1E54" size={70} />,
            title: "Movies",
        },

        {
            icon: <GrTechnology color="#FF204E" size={70} />,
            title: "Technologies",
        },
        {
            icon: <IoCodeSlashSharp color="#0096FF" size={70} />,
            title: "programming",
        },
    ];
    return (
        <QuizContainer>
            <Text
                variant="gradient"
                fw={"bold"}
                fz={{ base: "2rem", md: "3rem", lg: "2rem" }}
                gradient={{ from: "red", to: "deeppink", deg: 45 }}
            >
                {data.category
                    ? `Selected Category: ${data.category}`
                    : "Select a Category"}
            </Text>

            <Grid miw={"90%"}>
                {categories.map((cat, index) => (
                    <Grid.Col span={{ base: 12, md: 6, lg: 4 }} key={index}>
                        <CategoryItem
                            icon={cat.icon}
                            title={cat.title}
                            onClick={() => {
                              
                               setQuizData(quizData[cat.title])
                            }}
                            active={cat.title === data.category}
                        />
                    </Grid.Col>
                ))}
            </Grid>
            <Button
                variant="gradient"
                miw={"200px"}
                onClick={handleStartQuiz}
                size="lg"
                radius={"xl"}
                gradient={{ from: "red", to: "deeppink", deg: 45 }}
                mt={"xl"}
            >
                Start Quiz
            </Button>
        </QuizContainer>
    );
}

export default CategoryPage
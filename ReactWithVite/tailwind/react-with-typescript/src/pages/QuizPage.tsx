import React from 'react'
import QuizContainer from '../components/QuizContainer'
import { Text } from '@mantine/core'
import QuizCard from '../components/QuizCard'

const QuizPage = () => {
  return (
    <QuizContainer>
        <Text            
            fw="bold"
            fz="h1"
            size="xl" weight={700} mb="md">Quiz Category
            </Text>
        <QuizCard />
    </QuizContainer>
  )
}

export default QuizPage
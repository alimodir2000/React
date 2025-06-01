import React, { useState } from 'react'
import QuizContainer from '../components/QuizContainer'
import { Text } from '@mantine/core'
import QuizCard from '../components/QuizCard'
import useQuizStore from '../store/quiz-store'
import { useNavigate } from 'react-router'

const QuizPage = () => {
  const { quizData, userAnswers, setUserAnswer } = useQuizStore();
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);
  const navigate = useNavigate();

  console.log(userAnswers);
  return (
    <QuizContainer>
      <Text
        fw="bold"
        fz="h1"
        size="xl" weight={700} mb="md">{quizData.category}
      </Text>
      <Text fw="normal" m="md">{currentQuestionIndex + 1} / {quizData.quizzes.length}</Text>
      <QuizCard
        onAnswer={(ans) => {
          if (userAnswers[currentQuestionIndex]?.answer === ans)
            return;
          const updatedAnswers = [...userAnswers];
          updatedAnswers[currentQuestionIndex] = {
            question: quizData.quizzes[currentQuestionIndex].question,
            answer: ans,
            correctAnswer: quizData.quizzes[currentQuestionIndex].answer,
            isCorrect: ans === quizData.quizzes[currentQuestionIndex].answer
          };

          setUserAnswer(updatedAnswers);


        }}
        isLastQuestion={currentQuestionIndex < quizData.quizzes.length - 1}
        onNext={
          () => {
            if (currentQuestionIndex < quizData.quizzes.length - 1)
              setCurrentQuestionIndex((prev) => prev + 1);
            else {
              navigate("/result");
            }
          }
        }
        question={quizData.quizzes[currentQuestionIndex].question}
        options={quizData.quizzes[currentQuestionIndex].options}
        correctAnswer={quizData.quizzes[currentQuestionIndex].answer}
      />
    </QuizContainer>
  )
}

export default QuizPage
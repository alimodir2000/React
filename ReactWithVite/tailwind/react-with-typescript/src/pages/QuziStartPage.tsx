import { Button, Text } from "@mantine/core"
import QuizContainer from "../components/QuizContainer"
import { useNavigate } from "react-router"
import useQuizStore from "../store/quiz-store";


const QuziStartPage = () => {
    const navigate = useNavigate();
    const { quizData } = useQuizStore();
    const nagivateToStartQuiz = () => {
        navigate('/quiz');
    }
    return (
        <QuizContainer>
            <Text
                variant="gradient"
                fw="bold"
                gradient={{ from: 'red', to: 'deeppink', deg: 45 }}
                size="xl" weight={700} mb="md">
                Welcome to the Quiz App!
            </Text>
            <Text
                fw={500}
                fz="h4">
                {quizData.category}
            </Text>
            <Text
                fw={500}
                fz="md">
                {quizData.description}
            </Text>

            <Text
                fw={500}
                fz="md">
                {quizData.passScore} Correct Answers!
            </Text>

            <Button
                variant="gradient"
                gradient={{ from: 'red', to: 'deeppink', deg: 45 }}
                size="md"
                mt="md"
                radius={"xl"}
                onClick={nagivateToStartQuiz}>
                Start
            </Button>

        </QuizContainer>
    )
}

export default QuziStartPage
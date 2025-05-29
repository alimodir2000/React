import { Button, Text } from "@mantine/core"
import QuizContainer from "../components/QuizContainer"


const QuziStartPage = () => {
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
                General-Knowledge
            </Text>
            <Text
                fw={500}
                fz="md">
                Test your knowledge with a variety of questions.
            </Text>

            <Text
                fw={500}
                fz="md">
                8 Correct Answers!
            </Text>

            <Button
                variant="gradient"
                gradient={{ from: 'red', to: 'deeppink', deg: 45 }}
                size="md"
                mt="md"
                radius={"xl"}
                onClick={() => console.log("Start Quiz Clicked")}>
                Start
            </Button>

        </QuizContainer>
    )
}

export default QuziStartPage
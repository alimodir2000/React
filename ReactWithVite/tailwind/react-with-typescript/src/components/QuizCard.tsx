import { Button, Flex, Text } from "@mantine/core";
import { useState } from "react";
import { FaArrowRight } from "react-icons/fa";

interface QuizCardProps {
    children?: React.ReactNode;
    question: string;
    options: string[];
    correctAnswer: string;
    onAnswer: (answer: string) => void;
    onNext: () => void;
}


const QuizCard = ({ children, question, options, correctAnswer, onAnswer, onNext }: QuizCardProps) => {

    const [selectedAnswer, setSelectedAnswer] = useState<string>("");

    const sampleOptions: string[] = [
        "Option 1",
        "Option 2",
        "Option 3",
        "Option 4"
    ];


    return (
        <Flex
            miw={"90%"}
            gap={"10"}
            direction="column"
            align="start"
            justify="center">
            <Text size="xl"  weight={500} mb="md" >sdfsdfsdf</Text>
            <Flex direction={"column"} gap={10} miw={"90%"} >
                {
                    sampleOptions.map((option, index) => {
                        return <Button
                            key={index}
                            onClick={() => {
                                setSelectedAnswer(option);
                            }}
                            size="md"
                            fw={350}
                            variant={selectedAnswer === option ? "gradient" : "outline"}
                            color={selectedAnswer === option ? "red" : "gray"}
                            radius={"xl"}
                            c={selectedAnswer === option ? "white" : "black"}
                        >
                            {option}
                        </Button>
                    })
                }
                <Flex gap={10} justify="flex-end" mt={20}>
                    <Button
                        onClick={onNext}
                        size="md"
                        fw={350}
                        variant="gradient"
                        gradient={{ from: 'blue', to: 'lightblue', deg: 45 }}
                        radius={"xl"}
                        c="black"
                        ml={10}
                        rightSection={<FaArrowRight />}
                    >
                        Next Question
                    </Button>
                </Flex>
            </Flex>

        </Flex>
    )
}

export default QuizCard
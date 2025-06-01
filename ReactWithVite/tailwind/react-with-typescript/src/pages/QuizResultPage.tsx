import { Box, Button, Text } from "@mantine/core";
import QuizContainer from "../components/QuizContainer";
import { useNavigate } from "react-router";
import useQuizStore from "../store/quiz-store";
import useGetResult from "../hooks/useGetResults";

const formatNumber = (number: number) => {
  return number.toFixed(2);
};

const QuizResultPage = () => {
  const { username, resetUserAnswers } = useQuizStore();
  const { correctAnswers, accuracy, totalQuestions, passed } = useGetResult();
  const navigate = useNavigate();
  
  

  return (
    <QuizContainer minHeight="300px">
      <Text
        variant="gradient"
        gradient={{ from: "red", to: "deeppink" }}
        fw={700}
        fz={24}
      >
        Quiz Results for {username}
      </Text>
      <Text fw={500} fz={16}>
        {passed ? "✅ You passed the quiz!" : "❌ You failed the quiz!"}
      </Text>

      <Box>
        <Text fw={500} fz={16}>
          ✅ You scored {formatNumber(accuracy)}%!
        </Text>
        <Text fw={500} fz={16}>
          {passed
            ? `✅ You passed the quiz with a score of ${formatNumber(
                accuracy
              )}%!`
            : `❌ You failed the quiz with a score of ${formatNumber(
                accuracy
              )}%!`}
        </Text>{" "}
        <Text fw={500} fz={16}>
          ✅ You answered {correctAnswers.length} out of {totalQuestions}{" "}
          questions correctly.
        </Text>
      </Box>
      <Button
        variant="gradient"
        miw={"200px"}
        onClick={() => {
          resetUserAnswers();
          navigate("/");
        }}
        size="md"
        radius={"xl"}
        gradient={{ from: "red", to: "deeppink", deg: 45 }}
      >
        Try Again
      </Button>
    </QuizContainer>
  );
};

export default QuizResultPage;

import { Center, Text } from "@mantine/core"
import QuizCard from "../components/QuizCard"
import QuizContainer from "../components/QuizContainer"


const PageNotFound = () => {
  return (
    <QuizContainer minHeight="100px">
       <Center>
        <Text
            variant="gradient"
            gradient={{from: 'red', to:'deeppink',deg: 45}}
            size="xl"
            fz={"h1"}
            align="center"
            mb="md"          
        >
            Page Not Found
        </Text>
       </Center>
    </QuizContainer>
  )
}

export default PageNotFound
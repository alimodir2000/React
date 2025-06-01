import QuizContainer from '../components/QuizContainer'
import { Button, Flex, Input, Text } from '@mantine/core'

import { TfiCup } from "react-icons/tfi";
import { GiBrain } from "react-icons/gi";
import { FaAward, FaCheckCircle } from "react-icons/fa";
import HomePageElemet from '../components/HomePageElemet';
import { Link, useNavigate } from 'react-router';
import useQuizStore from '../store/quiz-store';





const WelcomPage = () => {
  const navigate = useNavigate();
  const { username, setUsername } = useQuizStore();


  const navigateToCategory = () => {
    navigate('/quiz-category');
  }
  return (
    <QuizContainer>
      <Text size="xl" weight={700} mb="md">
        Welcome to the Quiz App! {username}
      </Text>
      <Text size="md" mb="md">
        Test your knowledge with a variety of questions.
      </Text>
      <Flex
        justify="center"
        align="center"
        direction="row"
        style={{ height: '100%' }}>
        <HomePageElemet icon={<TfiCup color='gold' size={50} />} title="Complete" />
        <HomePageElemet icon={<GiBrain color='blue' size={50} />} title="Learn" />
        <HomePageElemet icon={<FaAward color='green' size={50} />} title="Improve" />
      </Flex>
      <Text ta={"center"} fz={"lg"} maw={"80%"} fw={"light"} c={"dimmed"}>
        Embark on a journey of knowledge with QuizMaster. Test your skills
        across various categories, challenge friends, and watch your expertise
        grow with each quiz you take.
      </Text>

      <Input
        placeholder="Enter your full name to start"
        radius={"xl"}
        w={"300px"}
        size="lg"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        rightSection={<FaCheckCircle color="green" />}
      />


      <Button
        disabled={!username}
        variant="gradient"
        miw={"200px"}
        size="lg"
        radius={"xl"}
        gradient={{ from: "red", to: "deeppink", deg: 45 }}
        onClick={navigateToCategory}
      >
        Select Category
      </Button>


    </QuizContainer>
  )
}

export default WelcomPage   
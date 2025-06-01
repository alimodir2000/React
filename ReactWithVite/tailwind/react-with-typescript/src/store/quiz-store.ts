import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

export interface UserAnswer {
    question: string;
    answer: string;
    isCorrect: boolean;
    correctAnswer: string;
}

export interface Quiz {
    question: string;
    options: string[];
    answer: string;
}

export interface QuizCategory {
    category: string;
    title: string;
    description: string;
    passScore: number;
    quizzes: Quiz[];
}

export interface QuizState {
    username: string;
    userAnswers: UserAnswer[];
    quizData: QuizCategory;

    //Actions
    setUsername: (username: string) => void;
    setUserAnswer: (answer: UserAnswer[]) => void;
    setQuizData: (quizData: QuizCategory) => void;
    resetUserAnswers: () => void;
}


const useQuizStore = create<QuizState>()(
    persist((set) => ({
        username: '',
        userAnswers: [],
        quizData: {
            category: '',
            title: '',
            description: '',
            passScore: 0,
            quizzes: []
        },
        setUsername: (name:string) => set({ username: name }),
        setUserAnswer: (answer: UserAnswer[]) => set(() => ({
            userAnswers: answer
        })),
        setQuizData: (quizData: QuizCategory) => set({ quizData }),
        resetUserAnswers: () => set({ userAnswers: [] })
    }), { name: 'quiz-storage', storage: createJSONStorage(() => localStorage) })
)
export default useQuizStore;
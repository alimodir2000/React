import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MantineUIProvider from './providers/MantineUIProvider'
import MainLayout from './layout/MainLayout'
import './styles/global.css'
import QuizPage from './pages/QuizPage'
import { BrowserRouter,  Routes, Route  } from "react-router";


createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <MantineUIProvider>
      <MainLayout>
        <BrowserRouter>
          <QuizPage />
        </BrowserRouter>
      </MainLayout>
    </MantineUIProvider>
  </StrictMode>

)

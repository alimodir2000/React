import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import MantineUIProvider from './providers/MantineUIProvider'
import MainLayout from './layout/MainLayout'
import './styles/global.css'
import QuizPage from './pages/QuizPage'
import { BrowserRouter,  Routes, Route  } from "react-router";
import WelcomPage from './pages/WelcomPage'
import PageNotFound from './pages/PageNotFound'
import CategoryPage from './pages/CategoryPage'
import QuziStartPage from './pages/QuziStartPage'
import QuizResultPage from './pages/QuizResultPage'


createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <MantineUIProvider>
      <MainLayout>
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<WelcomPage />} />
            <Route path='/quiz-category' element={<CategoryPage />} />
            <Route path='/quiz-start' element={<QuziStartPage />} />
            <Route path='/quiz' element={<QuizPage />} />
            <Route path='/result' element={<QuizResultPage />} />
            <Route path='*' element={<PageNotFound />} />

          </Routes>
        </BrowserRouter>
      </MainLayout>
    </MantineUIProvider>
  </StrictMode>

)

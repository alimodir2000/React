import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App'
import MantineUIProvider from './providers/MantineUIProvider'


createRoot(document.getElementById('root')!).render(

  <StrictMode>
    <MantineUIProvider>
      <App />
    </MantineUIProvider>
  </StrictMode>

)

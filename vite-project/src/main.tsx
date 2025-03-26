import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Profile from './pages/Profile'
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Profile />
  </StrictMode>,
)

import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

import'./styles/styles-global/main.sass'
import Home from './pages/home/Home.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Home/>
  </StrictMode>,
)

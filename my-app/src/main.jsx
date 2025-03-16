import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'

/* createRoot is used to create a root to render your React application.
This is part of the new React 18 API for concurrent renderring. */
createRoot(document.getElementById('root')).render(
  
  /* StrictMode is a tool for highlighting potential problems in an application. 
  It activates additional checks and warnings for its descendants. */
  <StrictMode>
    <App />
  </StrictMode>,
  
)

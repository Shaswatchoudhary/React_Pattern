
import React, { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Hello from './hello.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Hello />
  </StrictMode>
)



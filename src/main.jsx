import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import Tinymce from './Tinymce.jsx'
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Tinymce />
  </StrictMode>,
)

import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { SpaceShareProvider } from './context/Space_Share_Context.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <SpaceShareProvider>
  <React.StrictMode>
    <App />
  </React.StrictMode>
  </SpaceShareProvider>,
)

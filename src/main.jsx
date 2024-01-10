import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import netlifyIdentity from 'netlify-identity-widget';
import { ThemeProvider } from './contexts/ThemeContext'

netlifyIdentity.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <App />
    </ThemeProvider>
  </React.StrictMode>,
)

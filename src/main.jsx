import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import netlifyIdentity from 'netlify-identity-widget';
import { ThemeProvider } from './contexts/ThemeContext'
import { UserProvider } from './contexts/UserContext'

netlifyIdentity.init();

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ThemeProvider>
      <UserProvider>
        <App />
      </UserProvider>
    </ThemeProvider>
  </React.StrictMode>,
)

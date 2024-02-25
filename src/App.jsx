// ROUTER
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

// Analytics

// CONTEXT
import {useContext} from 'react';
import {ThemeContext} from './contexts/ThemeContext'

// COMPONENTS
import RouterWrapper from './components/RouterWrapper'
import Login from './components/Login/Login'
import Button from './components/UI/Button';

// STYLES
import './App.css'
import './styles/global.css'
import './styles/themes.css'

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext); 
  
  return (
    <Router>
      <nav>
        <Link to="/">Raíz</Link>
        <Link to="/jergaCreate">JergaCreate</Link>
        <Link to="/jergaRelok">JergaRelok</Link>
        <Link to="/emojiHaiku">EmojiHaiku</Link>
      </nav>
      <RouterWrapper />
      <footer>
        <Button text={theme === 'dark' ? '🌒︎' : '🌖︎'} onClick={toggleTheme} />
        <Login />
      </footer>
    </Router>
  );
}

export default App

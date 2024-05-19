// ROUTER
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

// Analytics

// CONTEXT
import { useState, useContext} from 'react';
import {ThemeContext} from './contexts/ThemeContext';

// COMPONENTS
import RouterWrapper from './components/RouterWrapper'
import Login from './components/Login/Login'
import Button from './components/UI/Button';
import Dots from './components/Dots/Dots';


// STYLES
import './App.css'
import './styles/global.css'
import './styles/themes.css'

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const [ navbarVisible, setNavbarVisible] = useState(true);
  const toggleNavbar = () => setNavbarVisible(!navbarVisible);
  
  return (
    <Router>
      <header>
        <Button text={theme === 'dark' ? '🌒︎' : '🌖︎'} onClick={toggleTheme} />
        <Login />
      </header>

      <Dots />
      
      <RouterWrapper />
      
      <div className="navContainer">
        <Button text='☰' onClick={toggleNavbar}/>
        {navbarVisible && (
          <nav>
            <Link to="/">Raíz</Link>
            <Link to="/jergaCreate">JergaCreate</Link>
            <Link to="/jergaRelok">JergaRelok</Link>
            <Link to="/emojiHaiku">EmojiHaiku</Link>
          </nav>
        )}
      </div>
    </Router>
  );
}

export default App

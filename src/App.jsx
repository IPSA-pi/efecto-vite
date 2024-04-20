// ROUTER
import {
  BrowserRouter as Router,
  Link,
} from 'react-router-dom';

// Analytics

// CONTEXT
import { useState, useContext} from 'react';
import {useStrobeTheme} from './hooks/useStrobeTheme';
import {ThemeContext} from './contexts/ThemeContext';

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
  const [isStrobing, toggleStrobe] = useStrobeTheme(); 
  const [ navbarVisible, setNavbarVisible] = useState(true);
  const toggleNavbar = () => setNavbarVisible(!navbarVisible);
  
  return (
    <Router>
      <header>
        <Button text={theme === 'dark' ? '🌒︎' : '🌖︎'} onClick={toggleTheme} />
        {/* <Button text={isStrobing ? 'Stop Strobe' : 'Start Strobe'} onClick={toggleStrobe} /> */}
        <Login />
      </header>
      
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

// ROUTER
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link,
  useLocation
} from 'react-router-dom';

// Analytics
import { initGA, logPageView } from './analytics';

// CONTEXT
import {useContext, useEffect, } from 'react';
import {ThemeContext} from './contexts/ThemeContext'

// COMPONENTS
import Home from './components/Home'
import JergaCreate from './components/JergaCreate/JergaCreate'
import JergaRelok from './components/JergaRelok/JergaRelok'
// import About from './components/About'
import Login from './components/Login/Login'
import Button from './components/UI/Button';

// STYLES
import './App.css'
import './styles/global.css'
import './styles/themes.css'

function App() {
  const { theme, toggleTheme } = useContext(ThemeContext); 
  const location = useLocation();

  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  useEffect(() => {
    logPageView();
  }, [location.pathname]);

  return (
    <Router>
      <nav>
        <Link to="/">Raíz</Link>
        <Link to="/jergaCreate">JergaCreate</Link>
        <Link to="/jergaRelok">JergaRelok</Link>
        {/* <Link to="/about">AcercaDe</Link> */}
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jergaCreate" element={<JergaCreate/>} />
        <Route path="/jergaRelok" element={<JergaRelok/>} />
        {/* <Route path="/about" element={<About/>} /> */}
      </Routes>
      <footer>
        <Button text={theme === 'dark' ? '🌒︎' : '🌖︎'} onClick={toggleTheme} />
        <Login />
      </footer>
    </Router>
  );
}

export default App

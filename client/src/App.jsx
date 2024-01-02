import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import {useContext} from 'react';
import {ThemeContext} from './contexts/ThemeContext'
import Home from './components/Home'
import JergaCreate from './components/JergaCreate/JergaCreate'
import JergaRelok from './components/JergaRelok/JergaRelok'
// import About from './components/About'
import './App.css'
import './styles/global.css'
import './styles/themes.css'

function App() {
  const footerLink = 'https://www.efectotv.net'
  const { toggleTheme } = useContext(ThemeContext); 
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
        <a href={footerLink}>efectotv 2023</a>
        <button onClick={toggleTheme}>Toggle Theme</button>
      </footer>
    </Router>
    
  )
}

export default App

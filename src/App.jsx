import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home'
import JergaCreate from './components/JergaCreate/JergaCreate'
import JergaRelok from './components/JergaRelok/JergaRelok'
import About from './components/About'
import './App.css'

function App() {
  const footerLink = 'efectotv.net'
  return (
    <Router>
      <nav>
        <Link to="/">Raíz</Link>
        <Link to="/jergaCreate">JergaCreate</Link>
        <Link to="/jergaRelok">JergaRelok</Link>
        <Link to="/about">AcercaDe</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jergaCreate" element={<JergaCreate/>} />
        <Route path="/jergaRelok" element={<JergaRelok/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
      <footer>
        <a href={footerLink}>efectotv 2023</a>
      </footer>
    </Router>
    
  )
}

export default App

import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from 'react-router-dom';
import Home from './components/Home'
import Jerga from './components/Jerga'
import JergaRelok from './components/JergaRelok/JergaRelok'
import About from './components/About'
import './App.css'

function App() {
  return (
    <Router>
      <nav>
        <Link to="/">Raíz</Link>
        <Link to="/jergaBinaria">JergaBinaria</Link>
        <Link to="/jergaRelok">JergaRelok</Link>
        <Link to="/about">AcercaDe</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/jergaBinaria" element={<Jerga/>} />
        <Route path="/jergaRelok" element={<JergaRelok/>} />
        <Route path="/about" element={<About/>} />
      </Routes>
    </Router>
  )
}

export default App

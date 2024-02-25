// RouterWrapper.jsx
import { useEffect } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { initGA, logPageView } from '../analytics';
import Home from './Home';
import JergaCreate from './JergaCreate/JergaCreate';
import JergaRelok from './JergaRelok/JergaRelok';
import EmojiHaiku from './Emojis/Emojis';

const RouterWrapper = () => {
  const location = useLocation();

  useEffect(() => {
    initGA();
    logPageView();
  }, []);

  useEffect(() => {
    logPageView();
  }, [location.pathname]);

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/jergaCreate" element={<JergaCreate />} />
      <Route path="/jergaRelok" element={<JergaRelok />} />
      <Route path="/emojiHaiku" element={<EmojiHaiku/>} />
      {/* Other routes */}
    </Routes>
  );
};

export default RouterWrapper;

import { createContext, useState, useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(netlifyIdentity.currentUser());

  useEffect(() => {
    netlifyIdentity.on('login', user => setUser(user));
    netlifyIdentity.on('logout', () => setUser(null));

    return () => {
      netlifyIdentity.off('login');
      netlifyIdentity.off('logout');
    };
  }, []);

  return (
    <UserContext.Provider value={{ user, setUser }}>
      {children}
    </UserContext.Provider>
  );
};
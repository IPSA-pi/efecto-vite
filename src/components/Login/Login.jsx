import { useState, useEffect } from 'react';
import netlifyIdentity from 'netlify-identity-widget';

const Login = () => {
  const [user, setUser] = useState(netlifyIdentity.currentUser());

  useEffect(() => {
    netlifyIdentity.on('login', user => setUser(user));
    netlifyIdentity.on('logout', () => setUser(null));

    return () => {
      netlifyIdentity.off('login');
      netlifyIdentity.off('logout');
    };
  }, []);

  const login = () => netlifyIdentity.open('login');
  const signup = () => netlifyIdentity.open('signup');
  const logout = () => netlifyIdentity.logout();

  if (user) {
    return (
      <div>
        <p>Welcome, {user.email}</p>
        <button onClick={logout}>Logout</button>
      </div>
    );
  }

  return (
    <div>
      <button onClick={login}>Login</button>
      <button onClick={signup}>Sign Up</button>
    </div>
  );  
};

export default Login;
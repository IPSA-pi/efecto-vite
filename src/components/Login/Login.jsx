import { useContext } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import { UserContext } from '../../contexts/UserContext'

const Login = () => {
  const { user, setUser } = useContext(UserContext);

  const handleLogin = () => {
    netlifyIdentity.open('login');
    netlifyIdentity.on('login', user => setUser(user));
  };

  const handleSignup = () => {
    netlifyIdentity.open('signup');
    netlifyIdentity.on('login', user => setUser(user));
  };

  const handleLogout = () => {
    netlifyIdentity.logout();
    setUser(null);
  };

  console.log(user);

  return (
    <div>
      {user ? (
        <div>
          <p>Welcome, {user.user_metadata.full_name}</p>
          <button onClick={handleLogout}>Logout</button>
        </div>
      ) : (
        <div>
          <button onClick={handleLogin}>Login</button>
          <button onClick={handleSignup}>Sign Up</button>
        </div>
      )}
    </div>
  );
};

export default Login;
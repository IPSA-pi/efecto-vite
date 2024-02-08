import { useContext } from 'react';
import netlifyIdentity from 'netlify-identity-widget';
import { UserContext } from '../../contexts/UserContext';
import Button from '../UI/Button';

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
          <Button text='Logout' onClick={handleLogout}/>
        </div>
      ) : (
        <div>
          <Button text='Login' onClick={handleLogin}/>
          <Button text='Sign Up' onClick={handleSignup}/>
        </div>
      )}
    </div>
  );
};

export default Login;
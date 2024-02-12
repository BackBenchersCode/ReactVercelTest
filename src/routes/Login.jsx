import { useState } from 'react';
//import styles from '@/styles/Login.module.css';
import { useAuthContext } from '@/context/AuthContext';
import { useNavigate, useLocation } from 'react-router-dom';
import Header from '@/components/Header';
const Login = () => {
  const [username, setUsername] = useState('');
  const { login } = useAuthContext();
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.pathname || '/';
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!username) return;
    login(username);
    setUsername(username);
    navigate(from, { replace: true });
  };
  return (
    <div>
      <Header>
        <h1>Login</h1>
      </Header>
      <div style={{ textAlign: 'center' }}>
        <form onSubmit={handleSubmit}>
          <input
            type="text"
            placeholder="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <button>Login</button>
        </form>
      </div>
    </div>
  );
};
export default Login;

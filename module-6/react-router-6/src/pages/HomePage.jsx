import { useLocation, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';

const HomePage = () => {
  const { login } = useAuth();
  const navigate = useNavigate();
  const { state } = useLocation();

  const handleClickLogin = () => {
    // console.log('location:', state.location.pathname);
    login();
    navigate(state?.location?.pathname ?? '/');
  };

  return (
    <>
      <h1>HomePage</h1>

      <button onClick={handleClickLogin}>Login</button>
    </>
  );
};

export default HomePage;

import { useSignOut } from 'react-firebase-hooks/auth';
import { auth } from '../components/firebase/FirebaseConfig';

import { useDispatch } from 'react-redux';
import { logout } from '../slice/AuthSlice';

const useLogOut = () => {
  const [signOut, isLoggingOut, error] = useSignOut(auth);

  const dispatch = useDispatch();

  const handleSignOut = async () => {
    try {
      await signOut();
      localStorage.removeItem('user-info');
      dispatch(logout());
    } catch (error) {
      console.log('error');
    }
  };
  return {
    handleSignOut,
    isLoggingOut,
    error,
  };
};

export default useLogOut;

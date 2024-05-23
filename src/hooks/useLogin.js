import { useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../components/firebase/FirebaseConfig';
import { doc, getDoc } from 'firebase/firestore';

import { useDispatch } from 'react-redux';
import { login } from '../slice/AuthSlice';

const useLogin = () => {
  const [signInWithEmailAndPassword, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const loginUser = async (inputs) => {
    if (!inputs.email || !inputs.password) {
      return console.log('error');
    }
    try {
      const userCred = await signInWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (userCred) {
        const docRef = doc(firestore, 'users', userCred.user.uid);
        const docSnap = await getDoc(docRef);
        localStorage.setItem('user-info', JSON.stringify(docSnap.data()));
        dispatch(login(docSnap.data()));
        console.log(doc);
      }
    } catch (error) {
      console.log('error in login');
    }
  };

  return { loading, error, loginUser };
};

export default useLogin;

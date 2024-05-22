import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../components/firebase/FirebaseConfig';
import { setDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { collection, query, where, getDocs } from 'firebase/firestore';
import { useState } from 'react';

import { useDispatch } from 'react-redux';
import { login } from '../slice/AuthSlice';
const useSignUpWithEmail = () => {
  const [isLoading, setIsLoading] = useState(false);
  // const { errorMsg } = useShowToast();
  const dispatch = useDispatch();

  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const signUpFunction = async (inputs) => {
    if (!inputs.name || !inputs.email || !inputs.password) {
      // errorMsg('all input fields are required');
      console.log('invalid input');
    }

    const usersRef = collection(firestore, 'users');

    const q = query(usersRef, where('username', '==', inputs.email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      // showToast('Error', 'Username already exists', 'error');
      console.log('username already exists');
      return;
    }

    try {
      setIsLoading(true);
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser && error) {
        // showToast('Error', error.message, 'error');
        console.log('error');
      }
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          fullName: inputs.name,
          bio: '',
          profilePicUrl: '',
          followers: [],
          following: [],
          posts: [],
          createdAt: Date.now(),
        };
        await setDoc(doc(firestore, 'users', newUser.user.uid), userDoc);
        setIsLoading(false);
        localStorage.setItem('user-info', JSON.stringify(userDoc));
        dispatch(login(userDoc));
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  return { signUpFunction, isLoading };
};

export default useSignUpWithEmail;

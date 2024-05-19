import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../components/firebase/FirebaseConfig';
import { useState } from 'react';
import { setDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { collection, query, where, getDocs } from 'firebase/firestore';

import useShowToast from './useShowToast';

const useSignUpWithEmailandPassword = () => {
  const [isLoading, setIsLoading] = useState(false);

  const { createUserWithEmailAndPassword, loading, error } =
    useCreateUserWithEmailAndPassword(auth);

  const { errorMsg } = useShowToast();

  const signUp = async (inputs) => {
    if (!inputs.name || !inputs.email || !inputs.password) {
      errorMsg('All the inputs required');
      return;
    }
    const usersRef = collection(firestore, 'users');

    const q = query(usersRef, where('username', '==', inputs.email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      errorMsg('All the inputs required');
      return;
    }
    try {
      setIsLoading(true);
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser && error) {
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
      }
    } catch (error) {
      setIsLoading(false);
      console.log(error);
    }
  };
  return { signUp, isLoading };
};

export default useSignUpWithEmailandPassword;

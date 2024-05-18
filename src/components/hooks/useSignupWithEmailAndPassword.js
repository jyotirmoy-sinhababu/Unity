import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks';

import { auth, firestore } from '../firebase/Firebase';
import { useState } from 'react';
import { setDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { collection, query, where, getDocs } from 'firebase/firestore';

const useSignupWithEmailAndPassword = (inputs) => {
  const [isLoading, setIsLoading] = useState(false);

  const [createUserWithEmailAndPassword, loading, error] =
    useCreateUserWithEmailAndPassword(auth);

  const signUpFunc = async () => {
    if (!inputs.name || !inputs.email || !inputs.password) {
      console.log('please provide valid dtls');
    }
    const userRef = collection(firestore, 'users');

    const q = query(userRef, where('email', '==', inputs.email));
    const querySnapshot = await getDocs(q);

    if (!querySnapshot.empty) {
      console.log('empty');
    }

    try {
      const newUser = await createUserWithEmailAndPassword(
        inputs.email,
        inputs.password
      );
      if (!newUser) {
      }
      if (newUser) {
        const userDoc = {
          uid: newUser.user.uid,
          email: inputs.email,
          userName: inputs.name,
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
    } catch (error) {}
  };
  return { signUpFunc, isLoading, loading, error };
};

export default useSignupWithEmailAndPassword;

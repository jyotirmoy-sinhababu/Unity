import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/Firebase';
import { useState } from 'react';
import { setDoc } from 'firebase/firestore';
import { doc } from 'firebase/firestore';
import { collection, query, where, getDocs } from 'firebase/firestore';

const useSignUpWithEmailandPassword = () => {
  const { createUserWithEmailAndPassword, isLoading, error } =
    useCreateUserWithEmailAndPassword(auth);

  const signUp = async (inputs) => {
    if (!inputs.name || !inputs.email || !inputs.password) {
    }
  };
};

export default useSignUpWithEmailandPassword;

import { useState } from "react";
import { moneytorAuth } from "../firebase/config";
import { useAuthContext } from "./useAuthContext";

export const useSignup = () => {
  const [error, setError] = useState(null);
  const [isPending, setIsPending] = useState(false);
  const { dispatch } = useAuthContext();

  const signup = async (email, password, displayName) => {
    setError(null);
    setIsPending(true);

    try {
      //signup user
      const res = await moneytorAuth.createUserWithEmailAndPassword(
        email,
        password
      );

      //dispatch login action
      dispatch({ type: "LOGIN", payload: res.user });

      if (!res) {
        throw new Error("Could not create new user");
      }

      //add displayName to user
      await res.user.updateProfile({ displayName });

      setIsPending(false);
      setError(null);
    } catch (err) {
      console.log(err.message);
      setError(err.message);
      setIsPending(false);
    }
  };

  return { error, isPending, signup };
};

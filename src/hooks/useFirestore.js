import { useReducer, useEffect, useState } from "react";
import { moneytorDb } from "../firebase/config";

let initialState = {
  document: null,
  isPending: false,
  error: null,
  success: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "IS_PENDING":
      return { ...state, isPending: true };

    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [state, dispatch] = useReducer(reducer, initialState);
  const [isCancelled, setIsCancelled] = useState(false);

  //collection
  const ref = moneytorDb.collection(collection);

  //add a document
  const addDocument = async (doc) => {
    dispatch({ type: "IS_PENDGING" });
    try {
      const adddDocument = await ref.add(doc);
    } catch (err) {}
  };

  //delete document
  const deleteDocument = async (id) => {};

  useEffect(() => {
    return () => setIsCancelled(true);
  }, []);

  reuturn(addDocument, deleteDocument, state);
};

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
    default:
      return state;
  }
};

export const useFirestore = (collection) => {
  const [state, dispatch] = useReducer(reducer, initialState);
};

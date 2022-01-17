import { useEffect, useState, useRef } from "react"
import { moneytorDb } from "../firebase/config"

export const useCollection = (collection, _query, _orderResultsBy) => {
  const [documents, setDocuments] = useState(null)
  const [error, setError] = useState(null)

  //if we dont use a ref --> an infinite loop will happen in useEffect
  //becue _query is an array, which is a reference type object that will be
  //different on every function call hence cause the useEffect to trigger again
  //because we ae using is as a dependency (together with collection)

  const query = useRef(_query).current
  const orderResultsBy = useRef(_orderResultsBy).current

  useEffect(() => {
    let ref = moneytorDb.collection(collection)

    if (query) {
      ref = ref.where(...query)
    }

    if (orderResultsBy) {
      ref = ref.orderBy(...orderResultsBy)
    }
    const unsubscribe = ref.onSnapshot(
      (snapshot) => {
        let results = []
        snapshot.docs.forEach((doc) => {
          results.push({ ...doc.data(), id: doc.id })
        })
        //update state
        setDocuments(results)
        setError(null)
      },
      (error) => {
        console.log(error)
        setError("could not fetch the data")
      }
    )

    //unsubscribe on amount =  celan up function
    return () => unsubscribe()
  }, [collection, query, orderResultsBy])

  return { documents, error }
}

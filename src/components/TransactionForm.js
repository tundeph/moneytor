import { useState, useEffect } from "react"
import { useFirestore } from "../hooks/useFirestore"

const TransactionForm = ({ uid }) => {
  const [name, setName] = useState("")
  const [amount, setAmount] = useState("")
  const { addDocument, response } = useFirestore("transactions")

  const handleSubmit = async (e) => {
    e.preventDefault()
    await addDocument({ uid, name, amount })
  }

  //reset form fields
  useEffect(() => {
    if (response.success) {
      setName("")
      setAmount("")
    }
  }, [response.success])

  return (
    <>
      <h3>Add a Transaction </h3>
      <form onSubmit={handleSubmit}>
        <label>
          <span> Transaction name:</span>
          <input
            type="text"
            onChange={(e) => setName(e.target.value)}
            value={name}
            required
          />
        </label>

        <label>
          <span> Amount:</span>
          <input
            type="number"
            onChange={(e) => setAmount(e.target.value)}
            value={amount}
            required
          />
        </label>

        <button>Add Transaction </button>
      </form>
    </>
  )
}

export default TransactionForm

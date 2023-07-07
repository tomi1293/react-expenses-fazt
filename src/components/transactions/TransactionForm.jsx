import React, { useState } from 'react'
import { useGlobalState } from '../../context/GlobalState'

export const TransactionForm = () => {

  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState(0)

  const {addTransaction} = useGlobalState()

  //Podemos usar el + delante de amount para que me transforme el string a numero
  const onSubmit = (e) => {
    e.preventDefault()
    addTransaction({
      id: window.crypto.randomUUID(),
      description,
      amount: +amount
    })
    setAmount(0);
    setDescription("");
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          type="text" 
          placeholder='Ingresa una descripion' 
          onChange={(e) => setDescription(e.target.value)}
          className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full'
          value={description}
        />
        <input 
          type="number" 
          placeholder='00.00' 
          step={0.01}
          onChange={(e) => setAmount(e.target.value)}
          className='bg-zinc-600 text-white px-3 py-2 rounded-lg block mb-2 w-full'
          value={amount}
        />
        <button className='bg-indigo-700 text-white px-3 py-3 rounded-lg block mb-2 w-full'>
          Add Transaction</button>
      </form>
    </div>
  )
}

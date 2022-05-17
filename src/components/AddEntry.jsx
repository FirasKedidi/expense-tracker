import React, { useContext, useState } from 'react'
import { ExpenseContext } from '../contexts/expenseContext'

const AddEntry = () => {
  const [description, setDescription] = useState("")
  const [amount, setAmount] = useState("")
  const {addEntry} = useContext(ExpenseContext)
  const handleSubmit = (e) => {
    e.preventDefault()
    const newEntry = {
      id: Math.floor(Math.random()*99999),
      description,
      amount}
    addEntry(newEntry)
    setAmount('')
    setDescription('')
  }
  return (
    <div className='border border-info rounded p-4 mt-4'>
      <form className='form-group'>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <input value={description} type="text" id="description" onChange={(e)=> setDescription(e.target.value)} className='form-control' />
        </div>
        <div className="form-group">
          <label htmlFor="amount">Amount</label>
          <input value={amount} type="number" id="amount" onChange={(e)=> setAmount(e.target.value)} className='form-control' />
        </div>
        <button onClick={handleSubmit} type="submit" className="btn btn-info mt-3">Add Entry</button>
      </form>
    </div>
  )
}

export default AddEntry
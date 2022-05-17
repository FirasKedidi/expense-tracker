import React, { useContext } from 'react'
import { ExpenseContext } from '../contexts/expenseContext'

export const TotalBalance = () => {
  const state = useContext(ExpenseContext)
  let sum = state.entries.reduce((acc, entry) => acc + parseInt(entry.amount), 0);
  return (
    <div>
        <h2 className='display-3 text-center'>${sum}</h2>
    </div>
  )
}

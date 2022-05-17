import React from 'react'
import AddEntry from './components/AddEntry'
import Entries from './components/Entries'
import Summary from './components/Summary'
import { TotalBalance } from './components/TotalBalance'
import './App.css';
import { ExpenseContextProvider } from './contexts/expenseContext'
export const App = () => {
  return (
    <ExpenseContextProvider>
      <div className='app container justify-content-center'>
        <TotalBalance />
        <Summary />
        <AddEntry />
        <Entries />
      </div>
    </ExpenseContextProvider>

  )
}

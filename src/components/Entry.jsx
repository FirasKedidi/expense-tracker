import React, { useContext } from 'react'
import { ExpenseContext } from '../contexts/expenseContext'

const Entry = ({entry}) => {
  const {handleDelete} = useContext(ExpenseContext)
  return (
    <div>
      <li className={`entry-item mt-2 list-group-item list-group-item-action list-group-item-${parseInt(entry.amount) <0?"danger":"success"}`}>
        {entry.description}
        <button onClick={()=>{
          handleDelete(entry.id)}} className='close-button close float-end'>
          <span aria-hidden="true">&times;</span>
        </button>
        <span className="float-end">
          {entry.amount>=0?"+"+entry.amount:entry.amount}
        </span>
      </li>
    </div>
  )
}

export default Entry
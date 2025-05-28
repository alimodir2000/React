import React from 'react'
import TransactionCard from '../TransactionCard/TransactionCard'

export const TransactionList = ({transactions, onDeleteTransaction}) => {
  //{id, description, amount, type, category, date}
  
  return (
    <div className='bg-white p-3 rounded-lg container mx-auto my-3 '>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Transaction Histroy</h1>
      </div>
      <div className="mt-3 max-h-[65vh] overflow-y-auto pt-2">
        {
          transactions.map((tr) =>{
            return(
            <TransactionCard key={tr.id} transaction={tr} onDeleteTransaction={onDeleteTransaction}  />)
          })
        }
      </div>

    </div>
  )
}

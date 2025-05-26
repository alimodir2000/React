import React from 'react'
import TransactionCard from '../TransactionCard/TransactionCard'

export const TransactionList = () => {
  //{id, description, amount, type, category, date}
  const transactions = [
    {
      id: 1,
      description: "test",
      amount: 100,
      type: "income",
      category: "income",
      date: "2025-05-25",     
    },
    {
      id: 2,
      description: "test",
      amount: 200,
      type: "withdraw",
      category: "income",
      date: "2025-05-25"
    },
    {
      id: 3,
      description: "test",
      amount: 500,
      type: "income",
      category: "income",
      date: "2025-05-25"
    }


  ];
  return (
    <div className='bg-white p-3 rounded-lg container mx-auto my-3 '>
      <div className="flex justify-between items-center">
        <h1 className="text-2xl font-bold">Transaction Histroy</h1>
      </div>
      <div className="mt-3 max-h-[65vh] overflow-y-auto pt-2">
        {
          transactions.map((tr) =>{
            return(
            <TransactionCard key={tr.id} transaction={tr} />)
          })
        }
      </div>

    </div>
  )
}

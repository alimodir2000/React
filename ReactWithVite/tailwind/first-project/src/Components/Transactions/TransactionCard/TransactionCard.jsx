import React from 'react'
import { SlTrash } from "react-icons/sl";

const TransactionCard = ({transaction}) => {
  const {id, description, amount, type, category, date} = transaction;
  return (
    <div className="flex flex-col gap-3 border-b border-gray-200 mb-3 p-2 hover:bg-gray-100">
      <div className="flex justify-between items-center">
        <div className=''>
          <h2 className={`text-xl font-bold ${type === "income" ? "text-green-500" : "text-red-500" }`} >
            {description}
          </h2>
          <p className="text-sm text-gray-500">
            {category} . {new Date(date).toLocaleDateString()}
          </p>
        </div>
        <div className='flex gap-5 items-center'>
            <h2 className={`text-xl font-bold ${type === "income" ? "text-green-500" : "text-red-500"}`}>
              {amount.toFixed(2)}
            </h2>
            <button className="rounded-full p-2 bg-red-500 hover:bg-red-600">
              <SlTrash className='w-5 h-5 text-white' />
            </button>
        </div>
      </div>
    </div>
  )
}

export default TransactionCard
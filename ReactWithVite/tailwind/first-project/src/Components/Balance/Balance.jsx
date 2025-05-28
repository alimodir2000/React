import React from 'react'
import { IoAddCircleOutline } from "react-icons/io5";
import Modal from '../Modal/Modal';
import CreateTransactionForm from '../CreateTransaction/CreateTransactionForm';

export const Balance = ({onAddTransaction, onCalculateBalance}) => {
    const {expense, income, balance} = onCalculateBalance();
    return (
        <div className='bg-white p-5 rounded-lg container mx-auto my-5'>
            <h1 className="text-2xl font-bold">Your Balance</h1>
            <div className="flex justify-between items-center">
                <div className=''>
                    <h2 className="mt-3 text-green-500 font-extrabold text-4xl">{balance}</h2>
                    <div className="flex gap-4 mt-2">
                        <p className='text-green-500'>Income:{income}</p>
                        <p className='text-red-500'>Expense: {expense}</p>
                    </div>
                </div>
                <Modal size='lg' button={ <button className='bg-green-500 flex gap-2 text-white px-4 py-2 rounded-xl hover:bg-green-600 hover:scale-110 transition-all duration-300'>
                    <IoAddCircleOutline className='w-6 h-6' />
                    Add Transaction
                </button>} >
                <CreateTransactionForm onAddTransaction={onAddTransaction} />
                </Modal>

               
            </div>
        </div>
    )
}

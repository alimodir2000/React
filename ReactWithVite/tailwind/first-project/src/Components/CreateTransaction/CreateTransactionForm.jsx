import React, { useState } from 'react'

const CreateTransactionForm = () => {
    const [formData, setFormData] = useState({
        type: "Expense",
        amount: 0,
        category: "",
        description: "",
        date: new Date().toISOString().split("T")[0],
    });

    const categories = {
        Income: ["Salary", "Gift", "Other"],
        Expense: ["Food", "Entertainment", "Other"]
    };



    return (
        <div className='p-5'>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Create Transaction</h2>
            <form>
                <div className="flex items-start">
                    <div className="flex gap-4 mb-4">
                        <label className="flex items-center mr-3">
                            <input type='radio' name='type' value="Expense" checked={formData.type === "Expense"} className='mr-2' />
                            <span className='text-red-500 font-medium'>Expense</span>
                        </label>

                        <label className="flex items-center mr-3">
                            <input type='radio' name='type' value="Income" checked={formData.type === "Income"} className='mr-2' />
                            <span className='text-green-500 font-medium'>Income</span>
                        </label>
                    </div>
                </div>
                <div className=''>
                    <lable htmlFor="amount" className="block text-gray-700 mb-2">Amount</lable>
                    <input type="number" name="amount" id="amount" 
                    className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>
                <div className=''>
                    <lable htmlFor="category" className="block text-gray-700 mb-2">Category</lable>
                    <select name="category" id="category" required
                        className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 '
                    >
                       <option>Select a Category</option>
                       {
                            categories[formData.type].map((cat) => {
                                return(
                                    <option key={cat} value={cat}>{cat}</option>
                                )

                            })

                       }

                    </select>
                </div>
                <div className=''>
                    <lable htmlFor="description" className="block text-gray-700 mb-2">Description</lable>
                    <textarea  name="description" id="description" 
                    className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>
            </form>

        </div>
    )
}

export default CreateTransactionForm
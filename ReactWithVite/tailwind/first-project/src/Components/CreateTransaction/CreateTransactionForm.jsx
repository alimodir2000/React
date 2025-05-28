import React, { useState } from 'react'

const CreateTransactionForm = ({onAddTransaction}) => {
    const [formData, setFormData] = useState({
        type: "Income",
        amount: 0,
        category: "",
        description: "",
        date: new Date().toISOString().split("T")[0],
    });

    const categories = {
        Income: ["Salary", "Gift", "Other"],
        Expense: ["Food", "Entertainment", "Other"]
    };


    const handleChange = (e) =>{
        const   {name, value} = e.target;
        setFormData({...formData, [name] : value});
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        onAddTransaction({...formData, id : Date.now()});

    }



    return (
        <div className='p-5'>
            <h2 className="text-2xl font-bold mb-6 text-gray-800">Create Transaction</h2>
            <form onSubmit={handleSubmit}>
                <div className="flex items-start">
                    <div className="flex gap-4 mb-4">
                        <label className="flex items-center mr-3">
                            <input type='radio' 
                            name='type' 
                            value="Expense" 
                            checked={formData.type === "Expense"} 
                            className='mr-2' 
                            onChange={handleChange} />
                            <span className='text-red-500 font-medium'>Expense</span>
                        </label>

                        <label className="flex items-center mr-3">
                            <input type='radio' 
                            name='type' 
                            value="Income" 
                            checked={formData.type === "Income"} 
                            className='mr-2' onChange={handleChange} />
                            <span className='text-green-500 font-medium'>Income</span>
                        </label>
                    </div>
                </div>
                <div className=''>
                    <label htmlFor="amount" className="block text-gray-700 mb-2">Amount</label>
                    <input type="number" 
                        name="amount" 
                        id="amount" 
                        onChange={handleChange}
                        required
                        className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>
                <div className=''>
                    <label htmlFor="category" className="block text-gray-700 mb-2">Category</label>
                    <select 
                        name="category" 
                        id="category" 
                        required value={formData.category} 
                        onChange={handleChange}                        
                        className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 '
                    >
                        <option>Select a Category</option>
                        {
                            categories[formData.type].map((cat) => {
                                return (
                                    <option key={cat} value={cat}>{cat}</option>
                                )

                            })

                        }

                    </select>
                </div>
                <div className=''>
                    <label htmlFor="description" className="block text-gray-700 mb-2">Description</label>
                    <textarea 
                        name="description" 
                        id="description" 
                        onChange={handleChange} 
                        value={formData.description}
                        required
                        className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>

                <div className=''>
                    <label htmlFor="date" className="block text-gray-700 mb-2">Date</label>
                    <input type='date' name="date" id="date" value={formData.date} onChange={handleChange}
                        className='w-full p-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500' />
                </div>
                <div className=''>
                    <button className={`${formData.type === "Expense" ? "bg-red-500 hover:bg-red-600" : "bg-green-500 hover:bg-green-600"} font-bold w-full rounded-lg text-white mt-2 p-2`}>
                        Add {formData.type === "Expense" ? "Expense" : "Income"}
                    </button>
                </div>
            </form>

        </div>
    )
}

export default CreateTransactionForm
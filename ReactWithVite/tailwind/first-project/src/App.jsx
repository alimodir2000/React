import { useState } from "react";
import { Balance } from "./Components/Balance/Balance";
import { TransactionList } from "./Components/Transactions/TransactionList/TransactionList";
import { parse } from "postcss";

const App = () => {
  const [transaction, setTransaction] = useState([]);
 

  const AddNewTransaction = (tr) =>{    
    setTransaction((prev) => [...prev, tr]);
    calculateBalance();
  }

  const deleteTransaction = (tr)=>{
     setTransaction((transaction.filter((t) => t.id !== tr.id)));
     calculateBalance();
  }

  const calculateBalance = () => {
    let _income = 0;
    let _expense = 0;

    transaction.forEach((x)=>{
      if(x.type === "Income")
        _income += parseFloat(x.amount);
      else
        _expense += parseFloat(x.amount);      
    });

    return {
      income: _income.toFixed(2),
      expense: _expense.toFixed(2),
      balance: (_income - _expense).toFixed(2)
    }

  }


  return (
    <div className="p-5">
      <div className="max-w-screen-lg mx-auto">
        <Balance onAddTransaction={AddNewTransaction} onCalculateBalance={calculateBalance} />
        <TransactionList transactions={transaction} onDeleteTransaction={deleteTransaction}/>
      </div>
    </div>);
}

export default App;
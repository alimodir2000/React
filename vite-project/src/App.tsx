import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

enum OrderStatus {
  Paid = 1,
  Shippd
}


interface Product{
  name: string,
  unitPrice: number
}

interface OrderDetail{
  product: Product,
  quantity: number,
  getTotal(discount?: number): number;
}


function App() {
  const [count, setCount] = useState(0)

  const costumer = {
    name: "Ali",
    turnover : 2003,
    active: true
  }

  const myOrderStatus = OrderStatus.Paid;

  console.log(myOrderStatus);
  console.log(costumer);
  costumer.active = false;
  console.log(costumer);

 

  console.log(costumer);

  const numbers: number[] = [];
  numbers.push(1);
  numbers.push(2);

  console.log(numbers);

 // numbers.pop();

 for(const i in numbers){
  console.log(numbers[i]);
 }

 numbers.forEach((num) => {
  console.log(num);
 })
 
  console.log(numbers);


  const table: Product ={
    name: "Table",
    unitPrice: 10
  }

  console.log(table);

  const tableOrder: OrderDetail = {
    product: table,
    quantity: 2,
    getTotal(discount): number {
        const priceWithoutDiscount = this.product.unitPrice * this.quantity;
        const discountAmount = priceWithoutDiscount * (discount || 0);
        return priceWithoutDiscount - discountAmount;
    },

  }

  console.log(tableOrder.getTotal(0.1));

  



  
  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  )
}

export default App

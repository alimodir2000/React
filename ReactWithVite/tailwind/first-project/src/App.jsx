import { Balance } from "./Components/Balance/Balance";
import { TransactionList } from "./Components/Transactions/TransactionList/TransactionList";

const App = () => {
  return (
    <div className="p-5">
      <div className="max-w-screen-lg mx-auto">
        <Balance />
        <TransactionList/>
      </div>
    </div>);
}

export default App;
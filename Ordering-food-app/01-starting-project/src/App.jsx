import Cart from "./components/UI/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CardContextProvider } from "./store/CartContext";
import UserProgressContext, {
  UserProgressContextProvider,
} from "./store/UserProgressContext";
import { Checkout } from "./components/Checkout";

function App() {
  return (
    <CardContextProvider>
      <UserProgressContextProvider>
        <Header />
        <Meals />
        <Cart />
        <Checkout/>
      </UserProgressContextProvider>
    </CardContextProvider>
  );
}

export default App;

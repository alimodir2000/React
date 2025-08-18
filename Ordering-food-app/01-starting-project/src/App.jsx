import Cart from "./components/UI/Cart";
import Header from "./components/Header";
import Meals from "./components/Meals";
import { CardContextProvider } from "./store/CartContext";
import UserProgressContext, {
  UserProgressContextProvider,
} from "./store/UserProgressContext";

function App() {
  return (
    <CardContextProvider>
      <UserProgressContextProvider>
        <Header />
        <Meals />
        <Cart />
      </UserProgressContextProvider>
    </CardContextProvider>
  );
}

export default App;

import "./App.css";
import EmployeeDirectory from "./components/EmployeeDirectory";
import { EmployeeContextProvider } from "./store/EmployeStore";

function App() {
  return (
    <EmployeeContextProvider>
      <EmployeeDirectory />
    </EmployeeContextProvider>
  );
}

export default App;

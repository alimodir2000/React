import Header from './components/Header.jsx';
import Login from './components/LoginByCustomHook.jsx';
import Singup from './components/Signup.jsx'


function App() {
  return (
    <>
      <Header />
      <main>
        {/* <Singup /> */}
        <Login />
      </main>
    </>
  );
}

export default App;

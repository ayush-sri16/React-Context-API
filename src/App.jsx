import "./App.css";
import UserContextProvider from "./context/UserContextProvider";
import Login from "./components/Login";
import Profile from "./components/Profile";

function App() {
  return (
    <UserContextProvider>
      <Profile/>
      <Login/>
    </UserContextProvider>
  );
}

export default App;

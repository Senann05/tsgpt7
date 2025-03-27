import UserList from "./components/UserList";
import { UserProvider } from "./context/UserContext";

function App(){
  return(
    <UserProvider>
      <div>
        <h1>Check</h1>
        <UserList/>
      </div>
    </UserProvider>
  )
}
export default App;
import "./App.css";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UsersList";

function App() {
  const users = [{ id: 1, name: "Max", age: 30 }];
  return (
    <div>
      <AddUser />
      <UserList users={users} />
    </div>
  );
}

export default App;

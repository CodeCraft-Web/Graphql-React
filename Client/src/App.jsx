import "./App.css";
import AddUser from "./component/AddUser";
import UserDetail from "./component/UserDetail";
import UserList from "./component/UserList";
import { useState } from "react";

function App() {
  const [selectUserId, SetSelectUserId] = useState(null);
  const handleUserSelect = (userId) => {
    SetSelectUserId(userId);
  };
  const handleCloseDetails = () => {
    SetSelectUserId(null);
  };
  return (
    <>
      <AddUser />
      {selectUserId && (
        <UserDetail 
          userId={selectUserId}
          onClose={handleCloseDetails} 
        />
      )}
      <UserList onUserSelect={handleUserSelect} />
    </>
  );
}

export default App;

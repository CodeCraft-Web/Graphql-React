import "./App.css";
import { useQuery } from "@apollo/client";
import { GET_USER } from "./graphql/queries";

function App() {
  const { data, loading, error } = useQuery(GET_USER);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <>
      <h1>Users</h1>
      {data && data.getUsers && data.getUsers.map((user) => (
        <div key={user.id}>
          <p>{user.name}</p>
          <p>Age: {user.age}</p>
          <p>Married: {user.isMarried ? "Yes" : "No"}</p>
        </div>
      ))}
    </>
  );
}

export default App;

import { useQuery } from '@apollo/client';
import { GET_USERS } from "../graphql/queries";

const UserList = () => {
  const { loading, error, data } = useQuery(GET_USERS);

  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error.message}</p>;
  return (
    <div>
      {data.getUsers.map((user) => (
        <div key={user.id}>
          <h2>{user.name}</h2>
          <p>Age: {user.age}</p>
          <p>Married: {user.isMarried ? 'Yes' : 'No'}</p>
        </div>
      ))}
    </div>
  );
};

export default UserList;

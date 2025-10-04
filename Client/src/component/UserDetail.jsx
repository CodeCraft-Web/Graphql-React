import { useQuery } from "@apollo/client";
import { GET_USER } from "../graphql/queries";

const UserDetail = ({ userId, onClose }) => {
  const { loading, error, data } = useQuery(GET_USER, {
    variables: { getUserById: userId },
    skip: !userId,
  });
  if (!userId) return null;
  if (loading) return <p>Loading users...</p>;
  if (error) return <p style={{ color: "red" }}>Error: {error.message}</p>;
  if (!data?.getUserById) return <p>User Not Found.</p>;

  const user  = data.getUserById;

  return (
    <div
      style={{
        padding: "1rem",
        border: "2px solid #007bff",
        borderRadius: "4px",
        backgroundColor: "#f0f8ff",
        marginBottom: "2rem",
      }}
    >
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          marginBottom: "1rem",
        }}
      >
        <h2>User Details</h2>
        <button
          onClick={onClose}
          style={{
            padding: "0.25rem 0.5rem",
            backgroundColor: "#dc3545",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: "pointer",
          }}
        >
          Close
        </button>
      </div>
      <div>
        <p>
          <strong>ID:</strong> {user.id}
        </p>
        <p>
          <strong>Name:</strong> {user.name}
        </p>
        <p>
          <strong>Age:</strong> {user.age}
        </p>
      </div>
    </div>
    // <div>
    //   <h3>{data.user.id}</h3>
    //   <p>{data.user.name}</p>
    //   <p>{data.user.age}</p>
    //   <p>{data.user.isMarried}</p>
    // </div>
  );
};

export default UserDetail;

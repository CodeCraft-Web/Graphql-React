import { useState } from "react";
import { useMutation } from "@apollo/client";
import { ADD_USER } from "../graphql/mutations";
import { GET_USERS } from "../graphql/queries";

const AddUser = () => {
  const [name, setName] = useState("");
  const [age, setAge] = useState("");
  const [isMarried, setIsMarried] = useState(false);
  const [addUser, { loading, error }] = useMutation(ADD_USER, {
    refetchQueries: [{ query: GET_USERS }],
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (name && age) {
      try {
        const response = await addUser({ 
          variables: { 
            input: {
              name, 
              age: parseInt(age), 
              isMarried 
            }
          } 
        });
        if (response.data) {
          alert("User Added Successfully");
          setName("");
          setAge("");
          setIsMarried(false);
        }
      } catch (error) {
        console.error("Error adding user:", error);
      }
    }
  };
  return (
    <div
      style={{
        marginBottom: "2rem",
        padding: "1rem",
        border: "1px solid #ddd",
        borderRadius: "4px",
      }}
    >
      <h2>Add New User</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "1rem" }}
      >
        <div>
          <label htmlFor="name">Name:</label>
          <input
            id="name"
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
            style={{ marginLeft: "0.5rem", padding: "0.5rem", width: "200px" }}
          />
        </div>
        <div>
          <label htmlFor="age">Age:</label>
          <input
            id="age"
            type="number"
            value={age}
            onChange={(e) => setAge(e.target.value)}
            required
            min="1"
            style={{ marginLeft: "0.5rem", padding: "0.5rem", width: "200px" }}
          />
        </div>
        <div>
          <p>is Married</p>
          <label htmlFor="yes">Yes</label>
          <input
            type="radio"
            name="marry"
            value="true"
            id="yes"
            checked={isMarried === true}
            onChange={() => setIsMarried(true)}
          />
          <label htmlFor="no">No</label>
          <input
            type="radio"
            name="marry"
            value="false"
            id="no"
            checked={isMarried === false}
            onChange={() => setIsMarried(false)}
          />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            padding: "0.5rem 1rem",
            backgroundColor: "#007bff",
            color: "white",
            border: "none",
            borderRadius: "4px",
            cursor: loading ? "not-allowed" : "pointer",
            width: "fit-content",
          }}
        >
          {loading ? "Adding..." : "Add User"}
        </button>
      </form>
      {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
    </div>
  );
};

export default AddUser;

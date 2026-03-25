/*
    Production Level React Practice: useEffect Hook

    Every API call in real apps must handle.
    - Loading
    - Success
    - Error

    Manage 3 states:
    - data
    - loading
    - error

*/
import { useState, useEffect } from "react";

const Users = () => {
  // 3 states
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true); // start loading
  const [error, setError] = useState(null);

  // useEffect
  useEffect(() => {
    // async function inside useEffect
    const fetchUsers = async () => {
      try {
        setLoading(true); // start loading
        setError(null); // reset error

        const response = await fetch(
          "https://jsonplaceholder.typicode.com/users",
        );

        if (!response.ok) {
          throw new Error("Failed to fetch users.");
        }

        const data = await response.json();
        setUsers(data); // success
      } catch (err) {
        setError(err.message); // error
      } finally {
        setLoading(false); // stop loading
      }
    };

    // Fetch users
    fetchUsers();
  }, []);

  // UI States
  /*
        return (
  <div>
    {loading && <p>Loading...</p>}
    {error && <p style={{ color: "red" }}>{error}</p>}

    {!loading && !error && users.map(user => (
      <p key={user.id}>{user.name}</p>
    ))}
  </div>
);

    */
  if (loading) {
    return <h2>Loading...</h2>;
  }

  if (error) {
    return <h2 style={{ color: "red" }}>Error: {error}</h2>;
  }

  return (
    <div>
      <h2>User List</h2>
      {users.map((user) => (
        <p key={user.id}>{user.name}</p>
      ))}
    </div>
  );
};

// Export the UI component
export default Users;

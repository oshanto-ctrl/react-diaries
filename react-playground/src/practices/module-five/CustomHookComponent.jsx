// Custom Hook Example
// ./hook directory 
// useFetch() custom hook for passing an url and showing
// the data in ui component
import React, { useState } from "react";
import useFetch from "./hooks/useFetch";

const UserProfile = ({ userId }) => {
   
    const {data: user, loading, error} = useFetch(`https://jsonplaceholder.typicode.com/users/${userId}`);

    if(loading) return <p>Loading user....</p>
    if(error) return <p>Error: {error}</p>

   return(
        user ? (
            <div>
                <h1>{user.name}</h1>
                <p>Email: {user.email}</p>
            </div>
        ) : <p>User not found.</p>
    );
};

// export default UserProfile;

const App = () => {
     const [id, setId] = useState(1);
    return(
        <div style={{ padding: "20px" }}>
            <h1>Dashboard</h1>
            <p>Current user ID: {id}</p>
            <button onClick={() => setId(id + 1)}>Next user</button>
            <button onClick={() => setId(id - 1)} disabled={id <= 1}>Previous user</button>

            {/* Pass ID in UserProfile Component */}
            <UserProfile userId={id} />
        
        </div>
    );
};

export default App;
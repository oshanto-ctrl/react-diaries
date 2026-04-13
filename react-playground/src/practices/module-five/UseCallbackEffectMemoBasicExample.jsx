import React, { useState, useEffect, useMemo, useCallback, memo } from 'react';

// --- CHILD COMPONENT ---
// We wrap this in memo() so it only re-renders if 'users' or 'onDelete' actually change.
const UserList = memo(({ users, onDelete }) => {
  console.log("🎨 Rendering <UserList /> - This is expensive UI!");
  return (
    <ul>
      {users.map(user => (
        <li key={user.id} style={{ marginBottom: '10px' }}>
          {user.name} ({user.email}) 
          <button onClick={() => onDelete(user.id)} style={{ marginLeft: '10px' }}>
            Delete
          </button>
        </li>
      ))}
    </ul>
  );
});

// --- PARENT COMPONENT ---
const UserDashboard = () => {
  const [users, setUsers] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [isDarkMode, setIsDarkMode] = useState(false);

  // 1. useEffect: Fetching the Data
  // This only runs once when the component mounts.
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(res => res.json())
      .then(data => {
        console.log("📡 API Data Fetched");
        setUsers(data);
      });
  }, []); // Empty array = run once.

  // 2. useCallback: The "Action" Handler
  // We pass this function to the child. If we don't wrap it in useCallback,
  // it gets recreated every time we toggle 'isDarkMode', causing the child to re-render.
  const handleDelete = useCallback((id) => {
    setUsers(prevUsers => prevUsers.filter(u => u.id !== id));
  }, []); // No dependencies needed because we use the functional update 'prevUsers'

  // 3. useMemo: The "Filtering" Logic
  // We only want to filter the users when 'users' data or the 'searchTerm' changes.
  const filteredUsers = useMemo(() => {
    console.log("🔍 Filtering users list...");
    return users.filter(user => 
      user.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [users, searchTerm]);

  return (
    <div style={{ 
      background: isDarkMode ? '#222' : '#fff', 
      color: isDarkMode ? '#fff' : '#000', 
      padding: '20px',
      minHeight: '100vh' 
    }}>
      <h1>User Directory</h1>
      
      <button onClick={() => setIsDarkMode(!isDarkMode)}>
        Switch to {isDarkMode ? "Light" : "Dark"} Mode
      </button>

      <div style={{ margin: '20px 0' }}>
        <input 
          type="text" 
          placeholder="Search by name..." 
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>

      <hr />

      {/* 4. The Optimized Child */}
      <UserList users={filteredUsers} onDelete={handleDelete} />
    </div>
  );
};

export default UserDashboard;
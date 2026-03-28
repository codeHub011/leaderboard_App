import React, { useEffect, useState } from 'react';
import axios from 'axios';

import UserSelector from './components/UserSelector';
import ClaimPoints from './components/ClaimPoints';
import Leaderboard from './components/Leaderboard';
import AddUser from './components/AddUser';
import './App.css';


function App() {
 
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);

  const fetchUsers = async () => {
    const res = await axios.get('http://localhost:5000/api/users');
    setUsers(res.data);
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  
  return (
    <div className="app-container">
      <h1>Leaderboard App</h1>

      <div className="section">
        <AddUser onAdd={fetchUsers} />
      </div>

      <div className="section input-group">
        <UserSelector users={users} onSelect={setSelectedUser} />
        <ClaimPoints user={selectedUser} onClaim={fetchUsers} />
      </div>

      <div className="section">
        <Leaderboard users={users} />
      </div>
    </div>
  );
}


export default App;

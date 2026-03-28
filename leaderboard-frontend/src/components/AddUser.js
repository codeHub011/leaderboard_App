import { useState } from 'react';
import axios from 'axios';

const AddUser = ({ onAdd }) => {
  const [name, setName] = useState('');

  const add = async () => {
    if (!name.trim()) return;
    await axios.post('http://localhost:5000/api/users/add', { name });
    setName('');
    onAdd();
  };

  return (
    <div className="input-group">
      <input
        type="text"
        placeholder="Enter new user name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <button onClick={add}>Add User</button>
    </div>
  );
};

export default AddUser;

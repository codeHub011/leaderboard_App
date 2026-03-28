const UserSelector = ({ users, onSelect }) => (
  <select onChange={(e) => onSelect(e.target.value)}>
    <option value="">Select User</option>
    {users.map(user => (
      <option key={user._id} value={user._id}>{user.name}</option>
    ))}
  </select>
);

export default UserSelector;

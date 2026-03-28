import './Leaderboard.css';



const Leaderboard = ({ users }) => (
  <div className="leaderboard-container">
    <h2 className="leaderboard-title">🏆 Leaderboard</h2>
    <ul className="leaderboard-list">
      {users.map((u, index) => (
        <li className="leaderboard-item" key={u._id}>
          <span className="rank">{index + 1}. {u.name}</span>
          <span className="points">{u.totalPoints} pts</span>
        </li>
      ))}
    </ul>
  </div>
);

export default Leaderboard;

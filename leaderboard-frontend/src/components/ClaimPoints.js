import axios from 'axios';

const ClaimPoints = ({ user, onClaim }) => {
  const claim = async () => {
    if (!user) return alert("Please select a user first!");
    await axios.post(`http://localhost:5000/api/users/claim/${user}`);
    onClaim();
  };

  return <button onClick={claim}>Claim Points</button>;
};

export default ClaimPoints;

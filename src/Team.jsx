import React from 'react';
//import './Team.css'; // Import the CSS file for Team styles

const Team = ({ selectedUsers, removeFromTeam }) => {
  return (
    <div className="Team">
      <h2>Team</h2>
      <div className="team-grid">
        {selectedUsers.map((user, ind) => (
          <div className="user-card" key={ind}>
            <div className="user-info">
              <p>{user.first_name} {user.last_name}</p>
              <button onClick={() => removeFromTeam(user)}>Remove</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;

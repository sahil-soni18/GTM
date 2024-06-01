import React, { useState, useEffect } from 'react';
import team from './Team.module.css';

const Team = () => {
  const [teamMembers, setTeamMembers] = useState([]);

  useEffect(() => {
    const fetchTeamData = async () => {
      try {
        const response = await fetch('http://localhost:5000/api/teams'); // Update with your API endpoint
        const data = await response.json();
        setTeamMembers(data);
      } catch (error) {
        console.error('Error fetching team data:', error);
      }
    };

    fetchTeamData();
  }, []);

  return (
    <div className={team.team_container} style={{ backgroundColor: 'white' }}>
      <h1 className={team.team_heading} style={{ fontSize: '76px', marginTop: '20px' }}>
        Our Core Team
      </h1>
      <div className={team.team_members}>
        {teamMembers.length > 0 ? (
          teamMembers.map((member, index) => (
            <div key={index} className={team.team_member}>
              <img src={member.imageLink} alt={member.name} />
              <h3>{member.name}</h3>
              <p>{member.position}</p>
            </div>
          ))
        ) : (
          <p>Loading team data...</p>
        )}
      </div>
    </div>
  );
};

export default Team;

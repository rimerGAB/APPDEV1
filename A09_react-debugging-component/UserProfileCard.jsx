import React, { useState } from 'react';
import "./style.css";

const userData = {
  name: 'Elmer Alvarado',
  avatarUrl: 'https://i.pravatar.cc/100',
  bio: 'Appdev1 instructor.',
  skills: ['React', 'JavaScript', 'HTML', 'CSS'],
  isOnline: false,
  lastUpdated: '2 hours ago',
};

function UserProfileCard({ user, skills }) {
  const [messageCount, setMessageCount] = useState(0);

  function handleSendMessage() {
    setMessageCount(messageCount + 1);
  }

  function handleReset() {
    setMessageCount(0);
  }

  return (
    <>
      <div className="profile-card">
        <img src={user.avatarUrl} alt={user.name} />

        <h2>{user.name}</h2>

        <label htmlFor="bio">Bio</label>
        <p id="bio">{user.bio}</p>

        <h3>Skills</h3>

        <ul>
          {skills.map((skill, index) => (
            <li key={index}>{skill}</li>
          ))}
        </ul>

        <div style={{ color: 'blue', fontWeight: 'bold' }}>
          Messages sent: {messageCount}
        </div>

        {user.isOnline ? <span>🟢 Online</span> : <span>⚪ Offline</span>}

        <button onClick={handleSendMessage}>Send Message</button>
        <button onClick={handleReset}>Reset</button>
      </div>

      <p>Card last updated: {user.lastUpdated}</p>
    </>
  );
}

export default function App() {
  return <UserProfileCard user={userData} skills={userData.skills} />;
}

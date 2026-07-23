import React, { useState } from 'react';
import './style.css';

const userData = {
  name: 'Rimer-Rey Arciola Gabaleo',
  avatarUrl:
    'https://scontent.fmnl30-2.fna.fbcdn.net/v/t39.30808-1/752242553_4375165952737760_3098380440839747155_n.jpg?stp=dst-jpg_tt6&cstp=mx1121x1123&ctp=s200x200&_nc_cat=110&_nc_map=urlgen_bucketless&ccb=1-7&_nc_sid=e99d92&_nc_eui2=AeG0wq3VuAyAOMzRjAJLCiFgt9LuKzesZQG30u4rN6xlARZlLjtvXaB83OozCXUihXJuErKupGbDtjgKr6OCaTu8&_nc_ohc=7Sg2GGdmtmoQ7kNvwFvQ-l4&_nc_oc=AdrUiIkDPArgFvQj86TDltVZWv4ZEc_8yyjg0oID8xbxddcUMerB-TPF7lTHbq1uVgo&_nc_zt=24&_nc_ht=scontent.fmnl30-2.fna&_nc_gid=wt773pEuAZaMRbfeBdpM5A&_nc_ss=7b2a8&oh=00_AQCw6QHDhsqdqsXnD7lzmCgofTAoo1W-qG3NU2AP1W4IDA&oe=6A682D56',
  bio: 'Im a UI/UX Aspirant',
  skills: ['Figma', 'Blender', 'React', 'JavaScript', 'HTML', 'CSS'],
  isOnline: true,
  lastUpdated: '1 minute ago',
};

function UserProfileCard({ user, skills }) {
  const [messageCount, setMessageCount] = useState(0);
  const [isFavorited, setIsFavorited] = useState(false);

  function handleSendMessage() {
    setMessageCount(messageCount + 1);
  }

  function handleReset() {
    setMessageCount(0);
  }
  function handleFavoriteToggle() {
    setIsFavorited(!isFavorited);
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
        {user.isOnline && (
          <button onClick={handleFavoriteToggle}>
            {' '}
            {isFavorited ? '★ Favorited' : '☆ Favorite'}
          </button>
        )}

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

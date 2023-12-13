import Button from './components/Button';
import TwitterFollowCard from './components/TwitterFollowCard';

import './App.css';

const users = [
  {
    userName: 'Fox',
    isFollowing: false,
    name: 'Fox the user',
  },

  {
    userName: 'Lucas',
    isFollowing: true,
    name: 'Lucas the user',
  },

  {
    userName: 'Ana',
    isFollowing: false,
    name: 'Ana the user',
  },
];

function App() {
  const formatterUserName = (userName) => <span>@ {userName}</span>;
  return (
    <div className="twitter-container">
      {users.map(({ userName, isFollowing, name }) => (
        <TwitterFollowCard
          imgUrl="https://media.npr.org/assets/img/2014/01/02/140102123909_1_wide-da99ab742e0a327bf840d4b8e01b864b019482ca-s1400-c100.jpg"
          initialIsFollowing={isFollowing}
          formattedUserName={formatterUserName(userName)}
          key={userName}
        >
          {name}
        </TwitterFollowCard>
      ))}
    </div>
  );
}

export default App;

import Button from './components/Button';
import TwitterFollowCard from './components/TwitterFollowCard';

import './App.css';

function App() {
  const formatterUserName = (userName) => <span>@ {userName}</span>;
  return (
    <div className="twitter-container">
      <TwitterFollowCard
        imgUrl="https://media.npr.org/assets/img/2014/01/02/140102123909_1_wide-da99ab742e0a327bf840d4b8e01b864b019482ca-s1400-c100.jpg"
        initialIsFollowing={true}
        formattedUserName={formatterUserName('foxy')}
      >
        Fox the user
      </TwitterFollowCard>
      <TwitterFollowCard
        imgUrl="https://bellzi.com/cdn/shop/products/Lr-9890-sw.jpg?v=1658216634"
        initialIsFollowing={false}
        name="Fox"
        formattedUserName={formatterUserName('foxy')}
      />

      <TwitterFollowCard
        imgUrl=""
        initialIsFollowing={false}
        formattedUserName={formatterUserName('Unknown')}
      />
    </div>
  );
}

export default App;

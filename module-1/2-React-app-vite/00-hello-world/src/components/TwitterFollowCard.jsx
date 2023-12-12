import { useState } from 'react';

const TwitterFollowCard = ({
  children,
  imgUrl,
  name = 'Unknown',
  formattedUserName,
  initialIsFollowing = false,
}) => {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);
  const followingText = isFollowing ? 'Following' : 'Follow';

  const buttonClassName = isFollowing
    ? 'tw-followCard-button is-following'
    : 'tw-followCard-button';

  const handleFollowing = () => {
    setIsFollowing(!isFollowing);
  };

  return (
    <article className="tw-followCard">
      <header className="tw-followCard-header">
        <img className="tw-followCard-img" alt="avart" src={imgUrl} />
        <div className="tw-followCard-info">
          <strong> {children || name} </strong>
          <span className="tw-followCard-userName"> {formattedUserName} </span>
        </div>
      </header>
      <aside>
        <button className={buttonClassName} onClick={handleFollowing}>
          {followingText}
        </button>
      </aside>
    </article>
  );
};

export default TwitterFollowCard;

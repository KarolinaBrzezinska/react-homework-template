import {
  FriendsListWrapper,
  // FriendsListTag,
  FriendListItem,
  Image,
  Status,
} from './FriendsList.styles';




export const FriendsList = ({ friends }) => {
  return (
    <FriendsListWrapper>
      <ul>
        {friends.map(({ id, name, isOnline, avatar }) => (
          <FriendListItem className="item" key={id}>
            <Status isActive={isOnline} className="status"></Status>
            <Image
              className="avatar"
              src={avatar}
              alt="User avatar"
              width="80"
              height="80"
            />
            <p className="name">{name}</p>
          </FriendListItem>
        ))}
      </ul>
    </FriendsListWrapper>
  );
};

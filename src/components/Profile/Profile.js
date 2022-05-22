import { ProfileWrapper, UserInformationWrapper, Image, Title, Tag, Location, ElementWrapper, List} from './Profile.styles';
import { HiEye } from 'react-icons/hi';
import { BsPeopleFill } from 'react-icons/bs';
import { AiOutlineLike } from 'react-icons/ai';



export const Profile = ({ username, tag, location, avatar, stats }) => {
  return (
    <ProfileWrapper>
      <UserInformationWrapper className="description">
        <Image src={avatar} alt="User avatar" className="avatar" />
        <Title className="name">{username}</Title>
        <Tag className="tag">@{tag}</Tag>
        <Location className="location">{location}</Location>
      </UserInformationWrapper>

      <List className="stats">
        <ElementWrapper>
          <span className="label"><BsPeopleFill /></span>
          <span className="quantity">{stats.followers}</span>
        </ElementWrapper>
        <ElementWrapper>
          <span className="label"><HiEye /></span>
          <span className="quantity">{stats.views}</span>
        </ElementWrapper>
        <ElementWrapper>
          <span className="label"><AiOutlineLike /></span>
          <span className="quantity">{stats.likes}</span>
        </ElementWrapper>
      </List>
    </ProfileWrapper>
  );
};

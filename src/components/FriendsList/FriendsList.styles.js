import styled from 'styled-components';

export const FriendsListWrapper = styled.div`
  @import url('https://fonts.googleapis.com/css2?family=Lato&display=swap');
  font-family: 'Lato', sans-serif;

  margin-top: 130px;

  background-color: #9c64a6;
  font-size: 30px;
  font-weight: 500;
  width: 600px;

  box-shadow: rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px,
    rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px,
    rgba(0, 0, 0, 0.09) 0px 32px 16px;
  border-radius: 10px;
`;

// export const FriendsListTag = styled.ul`
//   & li:nth-child(3) {
//     background-color: #ce93d8;
//     border-radius: 50px;
//     box-shadow: rgba(0, 0, 0, 0.25) 0px 25px 50px -12px;
//   }
// `;

export const FriendListItem = styled.li`
  display: flex;

  margin-top: 10px;
  align-items: center;
  color: #000;
  
  &:hover {
  background-color: #ce93d8;
  transform: scale(1.2);    
  cursor: pointer;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;  
    border-radius: 50px;  }
}

`;

export const Image = styled.img`
  margin-right: 15px;
  background-color: #fff;
  border-radius: 19931212px;
`;

export const Status = styled.span`
  margin-right: 20px;
  height: 20px;
  width: 20px;
  border-radius: 19931212px;
  background-color: ${props => (props.isActive ? 'green' : 'red')};
`;

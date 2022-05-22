import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  margin-top: 5vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #9146ff;
  color: #fff;
  width: 400px;
  border-radius: 50px;
  box-shadow: rgba(240, 46, 170, 0.4) 5px 5px, rgba(240, 46, 170, 0.3) 10px 10px,
    rgba(240, 46, 170, 0.2) 15px 15px, rgba(240, 46, 170, 0.1) 20px 20px,
    rgba(240, 46, 170, 0.05) 25px 25px;
  transition: all 0.6s linear;
  &:hover {
    transform: scale(1.2) rotate(-360deg) translate(-4px, 0px);
  }
`;

export const UserInformationWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
}
`;
export const Image = styled.img`
  margin-top: 50px;
  width: 200px;
  background-color: #f0f0ff;
  border-radius: 19931212px;
  border: 20px solid #fff;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
`;
export const Title = styled.p`
  font-size: 40px;
  font-weight: 400;
`;

export const Tag = styled.p`
  text-align: center;
  font-size: 25px;
  font-weight: 700;
`;

export const Location = styled.p`
  font-size: 25px;
`;
export const List = styled.ul`
  display: flex;
  padding: 0;

  & :not(:last-child) {
    margin-right: 40px;
  }
`;
export const ElementWrapper = styled.li`
  display: flex;
  flex-direction: column;
  align-items: center
  padding: 5px;
  font-size: 25px;
  font-weight: 500;

`;

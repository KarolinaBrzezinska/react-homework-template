import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 130px;
  background-color: #e1e2e1;
  width: 100%;
  &:hover {
    transform: scale(1);
    cursor: pointer;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;    }
}

`;

export const StatisticsWrapper = styled.section`
  margin: 130px auto;
  background-color: #fff;
  width: 40%;
  text-align: center;
  box-shadow: rgb(85, 91, 255) 0px 0px 0px 3px, rgb(31, 193, 27) 0px 0px 0px 6px,
    rgb(255, 217, 19) 0px 0px 0px 9px, rgb(255, 156, 85) 0px 0px 0px 12px,
    rgb(255, 85, 85) 0px 0px 0px 15px;

  & h2 {
    padding-top: 10px;
`;

export const StatList = styled.ul`
  list-style-type: none;
  display: flex;
  justify-content: space-around;
  padding: 0;
  & li {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
    padding: 30px;
    background-color: #ffd913;
    border-radius: 1220px;
    & span {
      margin-top: 15px;
    }

    &:hover {
      transform: scale(1);
      cursor: pointer;
      box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
        rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
        rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
    }
  }
`;

import styled from 'styled-components';

export const Wrapper = styled.div`
  margin-top: 130px;
  width: 100%;
  background-color: #e1e2e1;
  @import url('https://fonts.googleapis.com/css2?family=Varela+Round&display=swap');
  font-family: 'Varela Round', sans-serif;
  &:hover {
    transform: scale(1);
    cursor: pointer;
    box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;    }
}

`;

export const Table = styled.table`
  margin: 80px auto;
  width: 80%;
  border-collapse: collapse;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
`;

export const TableHead = styled.thead`
  text-align: left;
  background-color: #bcaaa4;
`;
export const TableHeadRow = styled.tr`
  & th {
    padding: 30px;
  }
`;

export const TableBody = styled.tbody`
  background-color: #fff;
`;

export const TableRow = styled.tr`
  transition: all 0.5s linear;
  &:hover {
    background-color: #efdcd5;
    transform: scale(1);
    cursor: pointer;
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px,
      rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px,
      rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
  }
  & th {
    padding: 30px;
  }
  & td {
    padding: 30px;
  }
`;

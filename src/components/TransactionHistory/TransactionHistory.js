import { Wrapper, Table, TableHead, TableHeadRow, TableBody, TableRow } from "./Transactions.styles";


export const TransactionHistory = ({ items }) => {
  return (
    <Wrapper>
      <Table className="transaction-history">
        <TableHead>
          <TableHeadRow>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
          </TableHeadRow>
        </TableHead>

        <TableBody>
          {items.map(({id, type, amount, currency}) => (
            <TableRow key={id}>
              <td>{type}</td>
              <td>{amount}</td>
              <td>{currency}</td>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </Wrapper>
  );
};

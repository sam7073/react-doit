import React, { PureComponent } from "react";
import PropTypes from "prop-types";
import Table from "../../UI/Table";
import TableRow from "../../UI/TableRow";
import TableCell from "../../UI/TableCell";
import TableHead from "../../UI/TableHead";
import TableBody from "../../UI/TableBody";

class TransactionTable extends PureComponent {
  render() {
    const { transactions } = this.props;
    return (
      <Table>
        <TableHead>
          <TableRow>
            <TableCell align="left">코인</TableCell>
            <TableCell align="center">시가 총액</TableCell>
            <TableCell align="center">현재 시세</TableCell>
            <TableCell align="right">거래 시간</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactions.map(
            ({ id, name, totalPrice, currentPrice, datetime }) => (
              <TableRow key={id}>
                <TableCell>{name}</TableCell>
                <TableCell align="center">{totalPrice}</TableCell>
                <TableCell align="center">{currentPrice}</TableCell>
                <TableCell align="right">{datetime}</TableCell>
              </TableRow>
            )
          )}
        </TableBody>
      </Table>
    );
  }
}

TransactionTable.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      totalPrice: PropTypes.string,
      currentPrice: PropTypes.string,
      datetime: PropTypes.string,
    })
  ),
};

export default TransactionTable;

import React from "react";
import { withStyles } from "@material-ui/core/styles";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";

function DisplayItems(props) {
  console.log("5_Display List Component");
  const { itemList, deleteItem } = props;

  const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white
    },
    body: {
      fontSize: 14
    }
  }))(TableCell);

  const StyledTableRow = withStyles(theme => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.background.default
      }
    }
  }))(TableRow);

  return (
    <TableContainer style={{ width: "50%", marginTop: "20px" }}>
      <Table>
        <TableHead>
          <TableRow>
            <StyledTableCell align="center">Name</StyledTableCell>
            <StyledTableCell align="center">Quantity</StyledTableCell>
            <StyledTableCell align="center">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {itemList.map(item => (
            <StyledTableRow key={item.name}>
              <StyledTableCell align="center">{item.name}</StyledTableCell>
              <StyledTableCell align="center">{item.quantity}</StyledTableCell>
              <StyledTableCell
                align="center"
                onClick={event => {
                  deleteItem(event, item.createdAt);
                }}
              >
                Delete
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
export default DisplayItems;

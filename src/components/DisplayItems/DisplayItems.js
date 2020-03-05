import React from "react";
import { withStyles } from "@material-ui/core/styles";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow
} from "@material-ui/core";
import DeleteOutlinedIcon from "@material-ui/icons/DeleteOutlined";
import "../icon.css";

const DisplayItems = React.memo(props => {
  // console.log("5_Display List Component");
  const { items, deleteItem } = props;

  const StyledTableCell = withStyles(theme => ({
    head: {
      backgroundColor: "#30409F",
      color: theme.palette.common.white,
      fontSize: 18
    },
    body: {
      fontSize: 16
    }
  }))(TableCell);

  const StyledTableRow = withStyles(theme => ({
    root: {
      "&:nth-of-type(even)": {
        backgroundColor: "#F5F5F5"
      }
    }
  }))(TableRow);

  return (
    <>
      <TableContainer
        style={{
          marginTop: "20px",
          borderRadius: "10px"
        }}
      >
        <Table>
          <TableHead>
            <TableRow>
              <StyledTableCell align="center">Name</StyledTableCell>
              <StyledTableCell align="center">Quantity</StyledTableCell>
              <StyledTableCell align="center">Action</StyledTableCell>
            </TableRow>
          </TableHead>
        </Table>
      </TableContainer>
      <TableContainer
        style={{
          maxHeight: "600px"
        }}
      >
        <Table>
          <TableBody>
            {items.map((item, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell align="center">{item.name}</StyledTableCell>
                <StyledTableCell align="center">
                  {item.quantity}
                </StyledTableCell>
                <StyledTableCell
                  align="center"
                  onClick={event => {
                    deleteItem(event, item.createdAt);
                  }}
                >
                  <DeleteOutlinedIcon id="icon" color="error" />
                </StyledTableCell>
              </StyledTableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <div
        id="footer"
        style={{
          backgroundColor: "#30409F",
          borderRadius: "6px",
          width: "100%"
        }}
      >
        &nbsp;
      </div>
    </>
  );
});
export default DisplayItems;

import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, styled } from "@mui/material";
import { useHistory } from "react-router-dom";
import { tableCellClasses } from "@mui/material";
import { useSelector } from "react-redux";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "rgba(196, 196, 196, 0.3);",
    color: "black",
    fontSize: "14px",
    fontWeight: "bold",
    border: "none",
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 14,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(even)": {
    backgroundColor: "rgba(196, 196, 196, 0.1)",
    borderRadious: "8px",
    height: "68px",
    border: "none",
  },
  "&:nth-of-type(odd)": {
    backgroundColor: "white",
    borderRadious: "8px",
    height: "68px",
    border: "none",
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const BorrowDetailTable = () => {
  const singleStudent = useSelector((state) => state.allStudents.students);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Borrow Date</StyledTableCell>
            <StyledTableCell align="left">Return Date</StyledTableCell>
            <StyledTableCell align="left">Book Name</StyledTableCell>
            <StyledTableCell align="left">Author</StyledTableCell>
            <StyledTableCell align="left">Return</StyledTableCell>
            <StyledTableCell align="left">Due Amount</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {singleStudent?.borrowers?.map((row, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {row?.borrower_date}
              </StyledTableCell>
              <StyledTableCell align="left">{row?.back_date}</StyledTableCell>
              <StyledTableCell align="left">{row?.book?.name}</StyledTableCell>
              <StyledTableCell align="left">
                {row?.book?.author?.name}
              </StyledTableCell>
              <StyledTableCell align="left">Ontime</StyledTableCell>
              <StyledTableCell align="left">11</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default BorrowDetailTable;

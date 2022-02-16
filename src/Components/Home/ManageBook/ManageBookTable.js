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

const ManageBookTable = () => {
  const totalBooks = useSelector(
    (state) => state.booksAvailable.booksAvailable
  );

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>ACCESSION NO</StyledTableCell>
            <StyledTableCell align="right">BOOK NAME</StyledTableCell>
            <StyledTableCell align="right">ATUHOR</StyledTableCell>
            <StyledTableCell align="right">EDITION</StyledTableCell>
            <StyledTableCell align="right">BOOK SELF NO</StyledTableCell>
            <StyledTableCell align="right">ROW</StyledTableCell>
            <StyledTableCell align="right">COLUMN</StyledTableCell>
            <StyledTableCell align="right">AVAILABILITY</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {totalBooks?.map((row, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {row?.accession_no}
              </StyledTableCell>
              <StyledTableCell align="right">{row?.name}</StyledTableCell>
              <StyledTableCell align="right">
                {row?.author?.name}
              </StyledTableCell>
              <StyledTableCell align="right">{row?.edition}</StyledTableCell>
              <StyledTableCell align="right">{row?.self_no}</StyledTableCell>
              <StyledTableCell align="right">{row?.row_no}</StyledTableCell>
              <StyledTableCell align="right">{row?.column_no}</StyledTableCell>
              <StyledTableCell align="right">AVAILABLE</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ManageBookTable;

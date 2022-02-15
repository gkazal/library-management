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
import { ActionButton } from "../../../Styles/globalStyled";

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

const ManageBorrowerTable = () => {
  const booksBorrowed = useSelector(
    (state) => state.booksBorrowed.booksBorrowed
  );
  console.log(booksBorrowed);

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Student ID</StyledTableCell>
            <StyledTableCell align="right">Student Name</StyledTableCell>
            <StyledTableCell align="right">Department</StyledTableCell>
            <StyledTableCell align="right">Contact</StyledTableCell>
            <StyledTableCell align="right">Email</StyledTableCell>
            <StyledTableCell align="right">Action</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {booksBorrowed &&
            booksBorrowed?.map((row, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell component="th" scope="row">
                  {row?.student_id}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row?.student?.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row?.student?.department?.name}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row?.student?.phone}
                </StyledTableCell>
                <StyledTableCell align="right">
                  {row?.student?.email}
                </StyledTableCell>
                <StyledTableCell align="right">
                  <Box>
                    <ActionButton
                    // onClick={() =>
                    //   handleStudentDetails(row.student_access_id)
                    // }
                    >
                      VIEW DETAILS
                    </ActionButton>
                  </Box>
                </StyledTableCell>
              </StyledTableRow>
            ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default ManageBorrowerTable;

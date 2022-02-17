import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Pagination, styled } from "@mui/material";
import { useHistory } from "react-router-dom";
import { tableCellClasses } from "@mui/material";
import { useSelector } from "react-redux";
import { ActionButton } from "../../../Styles/globalStyled";
import { useDispatch } from "react-redux";
import {
  fetchBooksBorrowed,
  fetchBorrower,
} from "../../../store/actions/booksBorrowedAction";

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
  const dispatch = useDispatch();
  // const student_id = booksBorrowed.student.student_access_id;

  const history = useHistory();
  const handleViewDetails = (studentAccessId) => {
    history.push("/borrowDetails/" + studentAccessId);
  };

  const [currentPage, setCurrentPage] = useState(1);

  const pageChanger = (event, value) => {
    setCurrentPage(value);
    dispatch(fetchBooksBorrowed(value - 1));
  };

  return (
    <>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 700 }} aria-label="customized table">
          <TableHead>
            <TableRow>
              <StyledTableCell>Student ID</StyledTableCell>
              <StyledTableCell align="left">Student Name</StyledTableCell>
              <StyledTableCell align="left">Department</StyledTableCell>
              <StyledTableCell align="left">Contact</StyledTableCell>
              <StyledTableCell align="left">Email</StyledTableCell>
              <StyledTableCell align="left">Action</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {booksBorrowed &&
              booksBorrowed?.data?.map((row, i) => (
                <StyledTableRow key={i}>
                  <StyledTableCell component="th" scope="row">
                    {row?.student_id}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {row?.student?.name}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {row?.student?.department?.name}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {row?.student?.phone}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    {row?.student?.email}
                  </StyledTableCell>
                  <StyledTableCell align="left">
                    <Box>
                      <ActionButton
                        onClick={() =>
                          handleViewDetails(row.student.student_access_id)
                        }
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

      <Box my={2}>
        <Pagination
          count={booksBorrowed?.totalPages}
          page={currentPage}
          onChange={pageChanger}
          variant="outlined"
        />
      </Box>
    </>
  );
};

export default ManageBorrowerTable;

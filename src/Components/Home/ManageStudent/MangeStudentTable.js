import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Pagination, styled } from "@mui/material";
import { tableCellClasses } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ActionButton } from "../../../Styles/globalStyled";
import {
  fetchAllStudents,
  fetchSingleStudent,
} from "../../../store/actions/allStudentsAction";
import { useHistory } from "react-router-dom";

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

const ManageStudentTable = () => {
  const allStudents = useSelector((state) => state.allStudents.allStudents);
  // console.log(allStudents[0].phone);
  console.log(allStudents);

  const [page, setPage] = React.useState(1);

  const dispatch = useDispatch();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    dispatch(fetchAllStudents(newPage));
  };

  const [studentProfile, setStudentProfile] = useState(false);

  const history = useHistory();
  const handleStudentDetails = (studentAccessId) => {
    history.push("/studentDetails/" + studentAccessId);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>STUDENT ID</StyledTableCell>
            <StyledTableCell align="left">STUDENT NAME</StyledTableCell>
            <StyledTableCell align="left">DEPARTMENT</StyledTableCell>
            <StyledTableCell align="left">BATCH</StyledTableCell>
            <StyledTableCell align="left">CONTACT NO</StyledTableCell>
            <StyledTableCell align="left">ACTION</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {allStudents &&
            allStudents.map((row, i) => (
              <StyledTableRow key={i}>
                <StyledTableCell component="th" scope="row">
                  {row?.student_access_id}
                </StyledTableCell>
                <StyledTableCell align="left">{row?.name}</StyledTableCell>
                <StyledTableCell align="left">
                  {row?.department?.name}
                </StyledTableCell>
                <StyledTableCell align="left">
                  {row?.batch?.name}
                </StyledTableCell>
                <StyledTableCell align="left">{row?.phone}</StyledTableCell>
                <StyledTableCell align="left">
                  <Box>
                    <ActionButton
                      onClick={() =>
                        handleStudentDetails(row.student_access_id)
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
      <Box p={1}>
        <Pagination
          count={Math.ceil(allStudents?.total / allStudents?.per_page)}
          variant="outlined"
          color="secondary"
          page={page}
          onChange={handleChangePage}
        />
      </Box>
    </TableContainer>
  );
};

export default ManageStudentTable;

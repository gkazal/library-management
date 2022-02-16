import React, { useState } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import { Box, Dialog, DialogContent, Pagination, styled } from "@mui/material";
import { tableCellClasses } from "@mui/material";
import { useDispatch, useSelector } from "react-redux";
import { ActionButton } from "../../../Styles/globalStyled";
import {
  fetchAllStudents,
  fetchSingleStudent,
} from "../../../store/actions/allStudentsAction";
import { useHistory } from "react-router-dom";
import AddDepartment from "./AddDepartment";
import AddBatch from "./AddBatch";

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

const DepartmentTable = () => {
  const departments = useSelector(
    (state) => state.allDepartments.allDepartments
  );
  console.log(departments);

  const [page, setPage] = React.useState(1);

  const dispatch = useDispatch();

  const handleChangePage = (event, newPage) => {
    setPage(newPage);
    dispatch(fetchAllStudents(newPage));
  };

  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 700 }} aria-label="customized table">
        <TableHead>
          <TableRow>
            <StyledTableCell>SERIAL</StyledTableCell>
            <StyledTableCell align="left">DEPARTMENT NAME</StyledTableCell>
            <StyledTableCell align="left">LAST ADDED BATCH NO</StyledTableCell>
            <StyledTableCell align="left">TOTAL STUDENT</StyledTableCell>
            <StyledTableCell align="left">ACTION</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {departments?.map((row, i) => (
            <StyledTableRow key={i}>
              <StyledTableCell component="th" scope="row">
                {row?.id}
              </StyledTableCell>
              <StyledTableCell align="left">{row?.name}</StyledTableCell>
              <StyledTableCell align="left">
                {row?.batches?.length}
              </StyledTableCell>
              <StyledTableCell align="left">
                {" "}
                {row?.users?.length}
              </StyledTableCell>
              <StyledTableCell align="left">
                <Box>
                  <ActionButton onClick={handleClickOpen}>
                    ADD NEW BATCH
                  </ActionButton>
                </Box>
              </StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </Table>

      <Dialog maxWidth="sm" fullWidth open={open} onClose={handleClose}>
        <DialogContent>
          <AddBatch />
        </DialogContent>
      </Dialog>

      <Box p={1}>
        <Pagination
          count={Math.ceil(departments?.total / departments?.per_page)}
          variant="outlined"
          color="secondary"
          page={page}
          onChange={handleChangePage}
        />
      </Box>
    </TableContainer>
  );
};

export default DepartmentTable;

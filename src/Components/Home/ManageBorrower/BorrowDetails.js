import { Grid } from "@mui/material";
import { Box } from "@mui/system";
import React, { useEffect } from "react";
import { BookRequestText } from "../../../Styles/globalStyled";
import DashboardTab from "../Dashboard/DashboardTab";
import Navbar from "../Navbar/Navbar";
import BorrowDetailTable from "./BorrowDetailTable";
import BookCard from "../../../Shared/TotalCard/BookCard";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { fetchSingleStudent } from "../../../store/actions/allStudentsAction";

const BorrowDetails = () => {
  const { studentAccessId } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    if (studentAccessId) {
      dispatch(fetchSingleStudent(studentAccessId));
    }
  }, [dispatch, studentAccessId]);

  const singleStudent = useSelector((state) => state.allStudents.students);

  console.log(singleStudent);
  const count = singleStudent?.borrowers?.length || 0;
  console.log(count);

  return (
    <>
      <Navbar />
      {/* <DashboardTab /> */}
      <Grid container justifyContent="center">
        <Grid item xl={8} lg={10} md={8} sm={11} xs={12}>
          <Box mt={10}>
            <Grid container justifyContent="center" spacing={5}>
              <Grid item lg={3}>
                <BookCard count={count} books={"Book Borrowed"} />
              </Grid>
              <Grid item lg={3}>
                <BookCard books={"Return Late"} />
              </Grid>
            </Grid>
          </Box>

          <Box mt={10}>
            <BookRequestText>Borrow History</BookRequestText>
            <BorrowDetailTable />
          </Box>
        </Grid>
      </Grid>
    </>
  );
};

export default BorrowDetails;
